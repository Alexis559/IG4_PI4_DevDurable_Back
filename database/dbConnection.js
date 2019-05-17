const mysql = require('mysql');

/**
 * Credentials for the connection to the database
 * @type {Connection}
 */
const config = mysql.createConnection({
    host: process.env.DB_HOST,
    port: '3306',
    user: 'psl',
    password: 'psl',
    database: 'bdpocpsl'
});

module.exports = config