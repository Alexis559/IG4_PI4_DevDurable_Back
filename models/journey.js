
module.exports.getAllJourneys = function (req, callback) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM Journey', function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Error, impossible to recover all the journeys.");
            }
            callback(rows);
        });
    });
}

module.exports.getAJourney = function (req, idJourney, callback) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM Journey WHERE JourneyID = ?', [idJourney], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Error, impossible to recover the journey.");
            }
            callback(rows[0]);
        });
    });
}

module.exports.insertJourney = function (req, callback) {
    req.getConnection(function (err, connection) {
        var queryInsert = "INSERT INTO Journey (Departure, Destination) VALUES (?, ?)";
        const jr = [
            req.body.Departure,
            req.body.Destination
        ]
        connection.query(queryInsert, jr, function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json('Error, impossible to insert the journey.');
            }
            callback(rows);
        });
    });
}

module.exports.deleteJourney = function (req, idJourney, callback) {
    req.getConnection(function (err, connection) {
        var queryDelete = "DELETE FROM Journey WHERE JourneyID = ?";
        connection.query(queryDelete, [idJourney], function (err, rows, fields) {
            if (err) {
                console.log(err);
                return err.status(500).json("Error, impossible to delete the journey.");
            }
            callback(rows[0]);
        });
    });
}

/*
module.exports.updateJourney = function (req, idJourney, callback) {
}



//Update a journey
journeyRoutes.put('/journeys', (req,res) => {
    let jrny = req.body;
    var sql = "SET @JourneyID = ?; SET @Departure = ?; SET @Destination = ?; \
    CALL JourneyEdit(@JourneyID, @Departure, @Destination);";
    mysqlConnection.query(sql, [jrny.JourneyID, jrny.Departure, jrny.Destination], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully.');
        else
        console.log(err);
    })
});

*/