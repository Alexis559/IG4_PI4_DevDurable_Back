const express = require('express');
const router = express();
const auth = require('../auth/auth');
const config = require('../database/dbConnection');

//add user
router.post('/add', function (req, res) {
  let connection = config
  let password = req.body.password;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let dateNaissance = req.body.dateNaissance;
  let mail = req.body.mail;
  let genre = 0;

  if(req.body.genre === 'F') {
    genre = 1
  }
  let passwordCrypt = auth().cryptPassword(password);

  let query = 'SELECT * FROM user WHERE mail = ?';
  connection.query(query, [mail], (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    if(results.length > 0) {
      res.status(409).json({
        success: false,
        message: 'Ce mail est déjà utilisé !MMM',
      });
    }else{
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