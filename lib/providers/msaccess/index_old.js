const ADODB = require('node-adodb');

class DbConn {
    constructor(connString) {
        this.conn = connString;
        this.connection = ADODB.open(connString);
        // const connection = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\Users\\sundar.natarajan\\Documents\\testDB.accdb;Persist Security Info=False;`);
    }

    static readData(query) {
        return new Promise(function(resolve, reject) {
            this.connection.query(query).on('done', function (data) {
                console.log('result:', JSON.stringify(data, null, '  '));
                resolve(data);
            }).on('fail', function (error) {
                console.log(error)
                reject(err)
            });
        })
    }

};

module.exports = DbConn;