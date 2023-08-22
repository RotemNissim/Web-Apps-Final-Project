const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');

const { router: dishRouter } = require('./routes/dishes');

const env = process.env.NODE_ENV || "local";

dotenv.config({ path: __dirname + `/config/.env.${env}` });

mongoose.set('strictQuery',false);
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var app = express();

app.use(
  session({
    secret: "nbVc7LoC6IDRigEwMFMkrq1tyaf90s3N",
        resave: false,
        saveUninitialized: true,
        cookie: { secure:false },
  })
);

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

 //routes
 app.use('/dishes', dishRouter);
 app.use('/about',require('./routes/about'));
 app.use('/admin',require('./routes/admin'));
 app.use('/carousel',require('./routes/carousel'));
 app.use('/login',require('./routes/login'));
 app.use('restaurants',require('./routes/restaurants'));
 app.use('/shoppingCart',require('./routes/shoppingCart'));

 const http = require('http').Server(app);

 const port = process.env.PORT || 8080;
 
 http.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });
 