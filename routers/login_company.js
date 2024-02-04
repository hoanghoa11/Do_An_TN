module.exports = app => {
    var Login = require('../controllers/login');
    var router = require('express').Router();

    router.post("/", Login.loginCompany);
   

    app.use("/loginCompany", router);
}