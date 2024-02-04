module.exports = (app) => {
    var Statistical = require('../controllers/statistical');
    var router = require('express').Router();
  
    router.get('/', Statistical.quantity);
  
    app.use('/statisticals', router);
  };
  