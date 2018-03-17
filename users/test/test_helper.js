/**
 * Created by heweiguang on 2018/3/17.
 */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //use ES6 Promise

before((done) => {
    mongoose.connect('mongodb://localhost/users_test'); //会自动创建 users_test
    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

//hock
beforeEach((done) => {
    const {
        users,
        comments,
        blogposts
    } = mongoose.connection.collections;

    //Ready to run the next test
    users.drop(() => {

        comments.drop(() => {
            blogposts.drop(() => {
                done();
            })
        })
    });
});
