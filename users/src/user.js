/**
 * Created by heweiguang on 2018/3/17.
 */

const mongoose = require('mongoose');

//创建 Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
});

//创建Model
const User = mongoose.model('user', UserSchema);

module.exports = User;
