
const express = require('express');
const router = express();

//add user
router.get('/add', function (req, res) {
  /*let pseudo = req.body.pseudo;
  let password = req.body.password;
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let date = req.body.date;
  let mail = req.body.mail;
  let passwordCrypt = utils().cryptPassword(password);*/
  print('tets');
  console.log("test add user");
});

module.exports = router;
