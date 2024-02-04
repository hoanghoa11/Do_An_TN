module.exports = app => {
    var Login = require('../controllers/login');
    var router = require('express').Router();

    router.post("/", Login.loginUser);
   

    app.use("/loginUser", router);
}