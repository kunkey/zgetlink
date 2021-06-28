require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

const APIController = require("./router/api/ApiController");
const PLAYERController = require('./router/player');

app.use("/api", APIController);
app.use("/play", PLAYERController);

app.listen(process.env.PORT || 80, console.log(`Server started at port ${process.env.PORT || 80}`));