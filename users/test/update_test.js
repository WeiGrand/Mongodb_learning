/**
 * Created by heweiguang on 2018/3/17.
 */

const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe', likes: 0 });
        joe.save()
            .then(() => {
                done();
            })
    });

    function assertName(operation, done) {
        operation.then(() =>
            User.find({
                // find all
            })
        )
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            })
    }

    it('Instance type using set n save', (done) => {
        joe.set('name', 'Alex');
        assertName(joe.save(), done);
    });

    it('A model instance can update', (done) => {
        assertName(joe.update({
            name: 'Alex'
        }), done);
    });

    it('A model class can update', (done) => {
        assertName(
            User.update({
                name: 'Joe'
            }, {
                name: 'Alex'
            }),
            done
        );
    });

    it('A model class can update one record', (done) => {
        assertName(
            User.findOneAndUpdate({
                name: 'Joe'
            }, {
                name: 'Alex'
            }),
            done
        );
    });

    it('A model class can find a record with an Id and update', (done) => {
        assertName(
            User.findByIdAndUpdate(joe._id, {
                name: 'Alex'
            }),
            done
        );
    });

    //xit can make it pending
    it('A user can have their likes in incremented by 1', (done) => {
        User.update({
            name: 'Joe'
        }, {
            $inc: {
                likes: 10
            }
        })
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                //joe.postCount === 0
                assert(user.likes === 10);
                done();
            })
    });
});
