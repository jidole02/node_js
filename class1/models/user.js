const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // 이게 스키마..??
    userNmae : String,
    password : String
})

// 찾을 때...
// db.users.find();
// user 뒤에 자동으로 s붙음...
module.exports = mongoose.model('user',UserSchema);