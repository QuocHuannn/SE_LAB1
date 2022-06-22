const mysql = require('mysql');
const { clearScreenDown } = require('readline');

var con = mysql.createConnection({
    host: "localhost",
    user: "sa",
    password: "svcntt"
});

con.connect(function(err) {
    if (err) 
    {
    console.error('\n\n=== error connecting: ' + err.stack);
    return;
    }
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) 
    {
    console.error('\n\n=== error connecting: ' + err.stack);
    return;
    }
    console.log("Database created");
    });
});
