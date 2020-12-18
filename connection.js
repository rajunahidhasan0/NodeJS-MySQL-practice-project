const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "raj",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("Connected! ok.");
        }
    else 
        {
            console.log("Oh! Connection Failed.")
        }   
});

module.exports = mysqlConnection;