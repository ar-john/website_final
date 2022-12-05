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
    host: "",
    user: "",
    password: ""
});

db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successful connected to the DB....`);
    }
  });


app.get("/", (req,res) => {
    res.render("index");
});

app.post("/insertflip", (req, res) => {
    let sql = `INSERT ___ INTO FLIPS;`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.render("index", {data: result });
    res.send('Flip added to DB');
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port 3000'));



