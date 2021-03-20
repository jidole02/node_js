
var User = require('../models/user')

exports.createUser = function(req,res){

    let userName = req.body.userName;
    let password = req.body.password;

    new User({userName : userName,password : password}).save((err,doc)=>{
        if(doc){
            console.log(doc)
            res.send("하울 서버에 유저가 생성되었습니다...")
        }
    })

    // 여기 db코드 추가하면 된다.
    res.send("유저가 생성됨");

}

exports.readUser = function(req,res){
    res.send("유저가 확인됨");
    
}

exports.updateUser = function(req,res){
    res.send("유저가 수정됨");
    
}

exports.deleteUser = function(req,res){
    res.send("유저가 삭제됨");
    
}