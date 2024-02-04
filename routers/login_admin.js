module.exports = (app) => {
    var Login = require('../controllers/login');
    var router = require('express').Router();
  
    router.post('/', Login.loginAdmin);
  
    app.use('/loginAdmin', router);
  };
  