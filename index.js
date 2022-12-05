const path = require("path");
const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const app = express();

//initialize body parser midddleware to parse data sent by users
app.use(express.json());
app.use(express.urlencoded({extended: false }));

// app.use("public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));


const db = mysql.createConnection({
    host: "34.170.243.152",
    user: "root",
    password: "root",
    database: "csifinal"
});

db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successful connected to the DB....`);
    }
});


app.get("/", (req,res) => {
  let sql2 = `USE csifinal`;
  
    let query2 = db.query(sql2, (err, result) => {
      if (err) {
        throw err;
      }
      // res.render("index");
      console.log('using csifinal');
      
    });  
  

  res.render("index");
});



app.get("/viewDB", (req, res) => {
  let sql2 = `SELECT * FROM coinflips;`;
  
    let query2 = db.query(sql2, (err, result) => {
      if (err) {
        throw err;
      }
      res.render("index");
      console.log(res);
      
    });
});

app.post("/insertflip", (req, res) => {

  let sql = "INSERT INTO coinflips (result) VALUES ('heads')";
    let query3 = db.query(sql, (err, result) => {
        if (err) {
          throw err;
        }
    res.render("index");
      // res.send('Flip added to DB');
    console.log('added');
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port 3000'));



