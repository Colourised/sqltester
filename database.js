var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb',
    port: 3306,
});

// connection.connect(function(err) {
//     if (err) {
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
//     console.log('Connected to database on thread: ' + connection.threadId);
// });

module.exports = connection;