var express = require("express");
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();


router.get('/', function(req, res, next) {
  let db = new sqlite3.Database('./routes/taskmanagement.db');

  let sql = `SELECT * FROM Task`;
    db.all(sql, [], (err, Tasks) => {
      if (err) 
      {
        throw err;
      }
      res.send({Tasks});
        });
      db.close();
    });

module.exports = router;