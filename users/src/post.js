/**
 * Created by heweiguang on 2018/3/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String
});

module.exports = PostSchema;
