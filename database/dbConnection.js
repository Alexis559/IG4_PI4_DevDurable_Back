const mysql = require('mysql');

const config = mysql.createConnection({
    host: process.env.DB_HOST,
    port: '3306',
    user: 'psl',
    password: 'psl',
    database: 'bdpocpsl'
});

module.exports = config