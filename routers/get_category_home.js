module.exports = app => {
    var TypeOfWork = require('../controllers/type_of_work');
    var router = require('express').Router();

    router.get('/', TypeOfWork.findCategori);


    app.use("/getCategori", router);
}