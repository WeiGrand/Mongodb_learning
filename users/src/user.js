/**
 * Created by heweiguang on 2018/3/17.
 */

const mongoose = require('mongoose');
const PostSchema = require('./post');

//创建 Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    posts: [PostSchema],
    likes: Number,
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});

UserSchema.virtual('postCount')
    .get(function() {
        //getter
        return this.posts.length;
    });

//创建Model
const User = mongoose.model('user', UserSchema);

module.exports = User;
