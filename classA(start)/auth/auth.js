
var passport = require('passport')
var BaisicStrategy = require('passport-http').BasicStrategy

// 여깄는 basic을 exports부분에서 참조해서 들어옴
passport.use(new BaisicStrategy(
    function (id, password, callback) {
        // 디비에 접근해서 아이디랑 비번 확인하는 부분이 들어가야함
        if(id === "jidole02" && password === "fprhwhdk1214") {
            callback(null,id);
        } else {
            callback(null,false);
        }

    }
))

exports.isBasicAuthenticated = passport.authenticate('basic', {session : false});