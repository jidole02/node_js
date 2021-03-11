
exports.createUser = function(req,res){
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