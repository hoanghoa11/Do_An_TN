module.exports = app => {
    var Login = require('../controllers/login');
    var router = require('express').Router();

    router.get("/", Login.checkLogin);

    app.use("/checkLogin", router);
}