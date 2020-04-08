const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
//const urlencodedParser = bodyParser.urlencoded({extended: true});
 
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "lererx",
  password: "password"
});
 
app.set("view engine", "hbs");
app.use(express.static('./'));
// app.get('/',function(req,res) {
//   res.sendFile('./index.html');
// });


// получение списка пользователей
app.get("/users", function(req, res){
    pool.query("SELECT * FROM users", function(err, data) {
        res.json(data);
    //   if(err) return console.log(err);
    //   res.render("login.html", {
    //       users: data
    //   });
    //console.log(data)
    });
});

app.post("/create", function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
console.log(req.body)
  const firstName_EN = req.body.firstName_EN;
  const lastName_EN = req.body.lastName_EN;
  const firstName_RU = req.body.firstName_RU;
  const lastName_RU = req.body.lastName_RU;
  const patronym_RU = req.body.patronym_RU;
  const gender = req.body.gender;
  const password = req.body.password;
  const role = req.body.role;
  const worker_type = req.body.worker_type;
  const image = '/images/default.jpg';
  
  pool.query("INSERT INTO users (firstName_EN, lastName_EN, firstName_RU, lastName_RU, patronym_RU, gender, password, role, worker_type, image) VALUES (?,?,?,?,?,?,?,?,?,?)", [firstName_EN, lastName_EN, firstName_RU, lastName_RU, patronym_RU, gender, password, role, worker_type, image], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});

// получаем отредактированные данные и отправляем их в БД
app.post("/edit", function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const firstName_EN = req.body.firstName_EN;
  const lastName_EN = req.body.lastName_EN;
  const firstName_RU = req.body.firstName_RU;
  const lastName_RU = req.body.lastName_RU;
  const patronym_RU = req.body.patronym_RU;
  const gender = req.body.gender;
  const password = req.body.password;
  const role = req.body.role;
  const worker_type = req.body.worker_type;
  const department = req.body.department
  const room = req.body.room
  const internal_phone = req.body.internal_phone
  const mobile_phone = req.body.mobile_phone
  const email = req.body.email
  const skype = req.body.skype
  const c_number = req.body.c_number
   
  pool.query("UPDATE users SET firstName_EN=?, lastName_EN=?, firstName_RU=?, lastName_RU=?, patronym_RU=?, gender=?, password=?, role=?, worker_type=?, department=?, room=?, internal_phone=?, mobile_phone=?, email=?, skype=? WHERE c_number=?", [firstName_EN, lastName_EN, firstName_RU, lastName_RU, patronym_RU, gender, password, role, worker_type, department, room, internal_phone, mobile_phone, email, skype, c_number], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});


app.post("/role", function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
console.log(req.body)
  const role = req.body.role;
  const id = req.body.id
  
  pool.query("UPDATE users SET role=? WHERE id=?", [role, id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});

 
app.listen(4000, function(){
  console.log("Сервер ожидает подключения...");
});