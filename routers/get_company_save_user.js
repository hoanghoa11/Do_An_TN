module.exports = app => {
    var Company = require('../controllers/company');
    var router = require('express').Router();

    router.get('/:id', Company.findCompanySaveUser);


    app.use("/getCompanySaveUser", router);
}