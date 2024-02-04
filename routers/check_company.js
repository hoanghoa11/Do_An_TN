module.exports = app => {
    var Company = require('../controllers/company');
    var router = require('express').Router();

    router.get('/', Company.checkAll);

    app.use("/checkCompanys", router);
}