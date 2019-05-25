const express = require('express');
const router = express();
const config = require('../services/database/dbConnection');


/**
 * GET request to get all the journeys of the db
 */
router.get('/all', (req, res) => {
    let connection = config;

    let query = 'SELECT * FROM journey';
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

/**
 * POST request to add a journey in the db
 */
router.post('/add', (req, res) => {
    let connection = config;
    let departure = req.body.departure;
    let destination = req.body.destination;
    let date = req.body.date;
    let time = req.body.time;
    let price = req.body.price;
    let placesAvailable = req.body.placesAvailable;

    let query = 'INSERT INTO journey (departure, destination, date, time, price, placesAvailable) values (?, ?, ?, ?, ?, ?)';
    connection.query(query, [departure, destination, date, time, price, placesAvailable], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(201).json({
            success: true,
            message: 'Journey created !',
        });
    });
});

/**
 * DELETE request to delete a journey in the db given its id
 */
router.delete('/delete/:id', (req, res) => {
    let connection = config;

    let query = 'DELETE FROM journey WHERE idJourney = ?';
    connection.query(query, [req.params.id], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(201).json({
            success: true,
            message: 'Journey deleted !',
        });
    });
});

/**
 * PUT request to update a journey in the db given its id
 */
router.put('/update/:id', (req, res) => {
    let connection = config;
    let departure = req.body.departure;
    let destination = req.body.destination;
    let date = req.body.date;
    let time = req.body.time;
    let price = req.body.price;
    let placesAvailable = req.body.placesAvailable;

    let query = 'UPDATE journey SET departure = ?, destination = ?, date = ?, time = ?, price = ?, placesAvailable = ? WHERE idJourney = ?';
    connection.query(query, [departure, destination, date, time, price, placesAvailable, req.params.id], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(201).json({
            success: true,
            message: 'Journey updated !',
        });
    });
}); 


module.exports = router;

