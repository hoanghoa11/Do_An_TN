module.exports = (app) => {
    var TypeOfWork = require('../controllers/type_of_work');
    var router = require('express').Router();
  
    router.post('/', TypeOfWork.create);
    router.get('/', TypeOfWork.findall);
    router.get('/:id', TypeOfWork.findone);
    router.get('/getWork/:id', TypeOfWork.getWork);
    router.delete('/:id', TypeOfWork.delete);
    router.patch('/:id', TypeOfWork.update);
  
    app.use('/typeWorks', router);
  };
  