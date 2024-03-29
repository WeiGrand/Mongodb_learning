/**
 * Created by heweiguang on 2018/3/17.
 */

const assert = require('assert');
const User = require('../src/user');

describe('sub documents', () => {
    it('can create a sub documents', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{
                title: 'PostTitle'
            }]
        });

        joe.save()
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user.posts[0].title === 'PostTitle');
                done();
            })
    });

    it('Can add sub documents to an existing record', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: []
        });

        joe.save()
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                user.posts.push({
                    title: 'New Post'
                });

                return user.save();
            })
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user.posts[0].title === 'New Post');
                done();
            })
    });

    it('Can remove an existing sub document', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{
                title: 'New Title'
            }]
        });

        joe.save()
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                const post = user.posts[0];

                post.remove();

                return user.save();
            })
            .then(() => User.findOne({
                name: 'Joe'
            }))
            .then((user) => {
                assert(user.posts.length === 0);
                done();
            })
    });
});
