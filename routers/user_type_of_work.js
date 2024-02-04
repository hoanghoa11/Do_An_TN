module.exports = app => {
    var UserTypeOfWork = require('../controllers/userTypeOfWork');
    var router = require('express').Router();

    router.post("/", UserTypeOfWork.create);
    router.get('/', UserTypeOfWork.findall);
    router.get('/:id', UserTypeOfWork.findone);
    router.delete('/:id', UserTypeOfWork.delete);
    router.patch('/:id', UserTypeOfWork.update);

    app.use("/userTypeOfWorks", router);
}