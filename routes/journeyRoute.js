
// Modules
const express = require('express');
const journeyRoutes = express.Router();

var journey = require('../models/journey');



//Return all the journeys of the db
journeyRoutes.get('/journeys', (req, res) => {
    journey.getAllJourneys(req, journeys => {
        return res.status(200).json(journeys);
    });
});

//Return a journey 
journeyRoutes.get('/journeys/:id', (req, res) => {
    journey.getAJourney(req, req.params.id, jrn => {
        return res.status(200).json(jrn);
    });
});

//Add a journey
journeyRoutes.post('/insert', (req, res) => {
    journey.insertJourney(req, jrn => {
        return res.status(200).json(jrn);
    });
});

//Delete a journey
journeyRoutes.delete('/delete/:id', (req, res) => {
    journey.deleteJourney(req, req.params.id, jrn => {
        return res.status(200).json(jrn);
    });
});

//Update a journey
journeyRoutes.put('/update/:id', (req, res) => {
    journey.updateJourney(req, req.params.id, jrn => {
        return res.status(200).json(jrn);
    });
});


module.exports = journeyRoutes;

