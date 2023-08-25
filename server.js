const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');

const { router: dishRouter } = require('./routes/dishes');
const  logoutRoute = require('./routes/logout');
const cartRoute = require('./routes/shoppingCart');
const checkoutRoute = require('./routes/checkout');

const ordersRouter = require('./routes/orderDishes')
const env = process.env.NODE_ENV || "local";

dotenv.config({ path: __dirname + `/config/.env.${env}` });

mongoose.set('strictQuery',false);
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB IS ON")
}).catch((err) => console.log("ERROR"));

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
 app.use('/logout',logoutRoute);
 app.use('restaurants',require('./routes/restaurants'));
 app.use('/shoppingCart',cartRoute);
 app.use('/checkout',checkoutRoute);

 app.use('/shoppingCart',require('./routes/shoppingCart'));
app.use('/Orders',ordersRouter)
 const http = require('http').Server(app);

 const port = process.env.PORT || 8080;
 
 http.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });
 