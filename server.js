// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// var app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// const path = require('path'); // This is the key part you were missing

// const { router: productRouter } = require('./routes/dishes');
// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Websocket connection handling
// io.on('connection', (socket) => {
//   console.log('New websocket connection:', socket.id);

//   // Handle incoming websocket events here
//   // For example, you can emit events to specific clients or broadcast to all connected clients.
// });

// app.use(express.static(path.join(__dirname, 'public')));

// // Start the server
// const port = process.env.PORT || 8080;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// //routes
// app.use('/',productRouter);
// app.use('/about',require('./routes/about'));
// app.use('/admin',require('./routes/admin'));
// app.use('/carousel',require('./routes/carousel'));
// app.use('/login',require('./routes/login'));
// app.use('suppliers',require('./routes/suppliers'));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');

const secretKey = process.env.SECRET_KEY;

const env = process.env.NODE_ENV || 'local';

dotenv.config({ path: __dirname + `./config/${env}.env` });

const { router: dishRouter } = require('./routes/dishes');

mongoose.set('strictQuery',false);

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var app = express();

app.use(
  session({
    secret: secretKey,
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
 app.use('/',dishRouter);
 app.use('/about',require('./routes/about'));
 app.use('/admin',require('./routes/admin'));
 app.use('/carousel',require('./routes/carousel'));
 app.use('/login',require('./routes/login'));
 app.use('suppliers',require('./routes/restaurants'));

 const http = require('http').Server(app);

 http.listen(process.env.PORT || 8080);
  server.listen(port, () => {
 console.log(`Server is running on port ${port}`);
 });