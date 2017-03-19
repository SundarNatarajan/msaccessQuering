const ADODB = require('node-adodb');
let conn, connection;

module.exports = {
    init: function (connString) {
        conn = connString;
        connection = ADODB.open(connString);
    },
    readData: function (query) {
        return new Promise(function (resolve, reject) {
            connection.query(query).on('done', function (data) {
                resolve(data);
            }).on('fail', function (error) {
                reject(error)
            });
        });
    },
    executeQuery: function (query) {
        return new Promise(function (resolve, reject) {
            connection.execute(query).on('done', function (data) {
                resolve(data);
            }).on('fail', function (error) {
                reject(error)
            });
        });
    }
};