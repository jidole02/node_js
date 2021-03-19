const express = require("express");
const route = express.Router();
const user = require("../controller/user");
const auth = require("../auth/auth");

route
  .route("/user")
  .post(user.createUser)
  .get(auth.isBasicAuthenticated, user.readUser)
  .put(auth.isBasicAuthenticated, user.updateUser)
  .delete(auth.isBasicAuthenticated, user.deleteUser);

  route.route("/test")
  .get((req, res) => {
      console.log(req.query)

      res.send("확인")
  })
  .post((res,req) =>{
      console.log(req.body)
      res.send("post방식")
  })

  route.route("/test/:id")
  .get((req, res) => {
      console.log(req)

      res.send("확인2")
  })

module.exports = route;
