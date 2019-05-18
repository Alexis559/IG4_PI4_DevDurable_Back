var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

const port = 3000


const mysql = require('mysql');
myConnection = require('express-myconnection');
dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ApplicationDB',
    port: 8889,
    multipleStatements: true
};
app.use(myConnection(mysql, dbOptions, 'single'));


// router
var api = require('./routes/mainRouter');
// routes
app.use('/api/', api);


//start the server
const server = app.listen(port, function () {
  console.log('Express server is listening on port ' + port);
});


module.exports = app;
