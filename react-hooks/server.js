
const express = require('express');
const cors = require('cors')
const mysql = require('mysql');

const app = express();


const SELECT = "SELECT * FROM users"
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "lererx",
  password: "password"
});

connection.connect(err => {
  if(err) {
    return err
  }
})

app.use(cors())

app.get('/', function(req, res) {
  res.send('It is working')
})

app.get("/users", function(req, res){
    connection.query(SELECT, function(err, results) {
      if(err) {
        return res.send(err)
      } else {
        return res.json({
          data: results
        })
      }
    });
});

 
app.listen(4000, function(){
  console.log("Server is working...");
});