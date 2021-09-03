const mysql=require('mysql');

module.exports=() => {
    return mysql.createConnection({
        host: 'localhost:3306',
        user: 'root',
        password: 'root',
        database:'covid'
    });
}