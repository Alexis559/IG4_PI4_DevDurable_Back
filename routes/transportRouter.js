const express = require('express');
const router = express();
const config = require('../database/dbConnection');

/**
 * GET request to get bus stops of Herault Transport
 */
router.get('/bus/stops', function (req, res) {
    let connection = config;

    let query = 'SELECT * FROM bus';//we're escaping values to avoid sql injection
    connection.query(query, [], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        if (results.length > 0) {
            res.status(200).json({
                success: true,
                stops: results
            });
        }
    });
});

module.exports = router;