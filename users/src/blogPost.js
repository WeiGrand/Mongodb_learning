/**
 * Created by heweiguang on 2018/3/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    content: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]
});

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

module.exports = BlogPost;
