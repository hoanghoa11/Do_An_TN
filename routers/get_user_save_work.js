module.exports = app => {
    var User = require('../controllers/user');
    var router = require('express').Router();

    router.get('/:id', User.findSaveWork);


    app.use("/getUserSaveWork", router);
}