/**
 * Created by heweiguang on 2018/3/17.
 */

const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {

    it('requires a user name', () => {
        const user = new User({ name: undefined });
        //sync way
        const validationResult = user.validateSync();
        //async way
        // user.validate((validationResult) => {
        //
        // })

        const {
            errors: {
                name: {
                    message
                }
            }
        } = validationResult;

        assert(message === 'Name is required.');
    });

    it('requires a user\'s name longer than 2 characters', () => {
        const user = new User({ name: 'Al' });
        const validationResult = user.validateSync();

        const {
            errors: {
                name: {
                    message
                }
            }
        } = validationResult;

        assert(message === 'Name must be longer than 2 characters.');
    });

    it('disallows invalid records from being saved', (done) => {
        const user = new User({ name: 'Al' });

        user.save()
            .then()
            .catch((validationResult) => {
                const {
                    errors: {
                        name: {
                            message
                        }
                    }
                } = validationResult;

                assert(message === 'Name must be longer than 2 characters.');
                done();
            });
    })
});
