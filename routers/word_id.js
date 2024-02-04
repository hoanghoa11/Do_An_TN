module.exports = app => {
    var Work = require('../controllers/work');
    var router = require('express').Router();

    router.get('/', Work.findAllId);

    app.use("/workId", router);
}