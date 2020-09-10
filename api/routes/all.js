const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./routes/taskmanagement.db');

let sql = `SELECT * FROM Task`;

db.all(sql, [], (err, Tasks) => {
  if (err) {
    throw err;
  }
  Tasks.forEach((Task) => {
    console.log(Task.TaskId + "\t" + Task.TaskName + "\t" + Task.Description);
  });
});

// close the database connection
db.close();