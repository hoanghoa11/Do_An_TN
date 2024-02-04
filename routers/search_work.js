module.exports = app => {
    var Work = require('../controllers/work');
    var router = require('express').Router();

    router.get('/', Work.search);

    app.use("/searchWorks", router);
}