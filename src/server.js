const express = require('express');
const app = express();
const path = require('path'); // commonjs
require('dotenv').config(); // load env file

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});