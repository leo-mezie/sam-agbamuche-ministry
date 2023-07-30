const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const fileUpload = require('express-fileupload')
const dotenv = require ('dotenv');

dotenv.config({ path : './config.env'});
const db = require('./models/DB');

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');


//middleware for  method override
app.use(methodOverride('_method'));

//middleware for express session
app.use(session({
    secret : "node-js",
    resave : true,
    saveUninitialized:true
}));


//middleware for connect flash
app.use(flash());

// middleware for fileupload
app.use(fileUpload());

//Setting messages variables globally
app.use((req, res, next)=> {
    res.locals.success_msg = req.flash(('success_msg'));
    res.locals.error_msg = req.flash(('error_msg'));
    next();
});



const routes = require('./routes/routes')
app.use('/', routes);




const PORT = 4000;

app.listen(PORT, console.log(`server is running on port ${PORT}`));
