const express = require('express');
const router = express();
const auth = require('../services/authService');
const config = require('../services/database/dbConnection');


/**
 * POST request to connect the user
 */
router.post('/login', function (req, res) {
    let connection = config;
    let mail = req.body.mail;
    let password = req.body.password;

    let query = 'SELECT * FROM user WHERE mail = ?';//we're escaping values to avoid sql injection
    connection.query(query, [mail], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        if (results.length > 0) {
            if (auth().compareSync(password, results[0].password)) {
                const payload = {
                    mail: results[0].mail,
                    nom: results[0].nom,
                    prenom: results[0].prenom,
                    dateNaissance: results[0].datenaissance,
                    genre: results[0].genre
                };
                var token = auth().createToken(payload);
                // return the information including token as JSON
                res.status(200).json({
                    success: true,
                    message: 'Utilisateur connecté !',
                    token: token,
                    mail: results[0].mail,
                    nom: results[0].nom,
                    prenom: results[0].prenom,
                    dateNaissance: results[0].datenaissance,
                    genre: results[0].genre
                });
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Mot de passe incorrect',
                    token: null
                });
            }
        } else {
            res.status(401).json({
                success: false,
                message: 'Utilisateur inconnu !',
                token: null
            });
        }
    });
});

/**
 * POST request to add a user to the database
 */
router.post('/add', function (req, res) {
    let connection = config
    let password = req.body.password;
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let dateNaissance = req.body.dateNaissance;
    let mail = req.body.mail;
    let genre = 0;

    if (req.body.genre === 'F') {
        genre = 1
    }
    let passwordCrypt = auth().cryptPassword(password);

    let query = 'SELECT * FROM user WHERE mail = ?';
    connection.query(query, [mail], (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        if (results.length > 0) {
            res.status(409).json({
                success: false,
                message: 'Ce mail est déjà utilisé !',
            });
        } else {
            let query2 = 'INSERT INTO user (prenom, nom, mail, datenaissance, password, genre, admin) values (?, ?, ?, ?, ?, ?, false)';//we're escaping values to avoid sql injection
            connection.query(query2, [prenom, nom, mail, dateNaissance, passwordCrypt, genre], (err, results, fields) => {
                if (err) {
                    return console.error(err.message);
                }
                res.status(201).json({
                    success: true,
                    message: 'Utilisateur créé !',
                });
            });
        }
    });
});

module.exports = router;