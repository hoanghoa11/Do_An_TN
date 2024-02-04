var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello');
});

//Users
require('./routers/user')(app);
require('./routers/userRole')(app);
require('./routers/userTag')(app);

require('./routers/login_company')(app);
require('./routers/login_user')(app);
require('./routers/login_admin')(app);

require('./routers/tag')(app);
require('./routers/statistical')(app);
require('./routers/send_mail')(app);
require('./routers/company')(app);
require('./routers/check_company')(app);
require('/routers/work')(app);
require('./routers/user')(app);
require('./routers/role')(app);
require('./routers/contact')(app);
require('./routers/type_of_work')(app);
require('./routers/new')(app);

require('./routers/social_network')(app);
require('./routers/candidate')(app);
require('./routers/recruiment')(app);
require('./routers/tag_new')(app);
require('./routers/workTypeOfWork')(app);
require('./routers/save_work')(app);
require('./routers/word_id')(app);
require('./routers/check_login')(app);
require('./routers/delete_save_work')(app);
require('./routers/user_type_of_work')(app);
require('./routers/get_user_save_work')(app);
require('./routers/get_company_save_user')(app);
require('./routers/work_apply')(app);
require('./routers/check_work_apply')(app);
require('./routers/check_user_apply')(app);
require('./routers/form_cv')(app);
require('./routers/tag_form_cv')(app);
require('./routers/get_category_home')(app);
require('./routers/search_work')(app);


//Error
app.use((err,req,res,next)=>{
    res.status(500).send(err);
});

//Port
app.listen(process.env.PORT || 3001,()=>{
    console.log('listening on port'+process.env.PORT);
})
