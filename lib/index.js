const co = require('co')
const config = require('./config');

const dbConnString = config.dbConnString;

// TODO based on class static functions
/*const DbConn = require('./providers/msaccess');
const dbConn = new DbConn(dbConnString);*/

const dbConn = require('./providers/msaccess');
dbConn.init(dbConnString);

function getTestTableData() {
    dbConn.readData(`Select * from testTable`).then(function (res) {
        if (res.valid && res.records) {
            console.log(`DB result: ${JSON.stringify(res.records)}`)
        } else {
            console.log(`No records fetched!, DB result: ${JSON.stringify(res)}`);
        }

    }).catch(function (err) {
        console.log(`testTable read data failure, err stack:${(err && err.stack) ? err.stack : ''}, error message: ${JSON.stringify(err)}`);
    })
}
function insertTestTableData() {
    dbConn.executeQuery('INSERT INTO testTable(Sno) VALUES (3)').then(function (res) {
        if (res.valid) {
            console.log(`Query Execution Result success, DB Result: ${JSON.stringify(res)}`)
        } else {
            console.log(`Query Execution failed, DB result: ${JSON.stringify(res)}`);
        }
    }).catch(function (err) {
        console.log(`Query Execution errored, err stack:${(err && err.stack) ? err.stack : ''}, error message: ${JSON.stringify(err)}`);
    })
}



/*
// use it with function* for the used functions inside co declared
co(function* () {
    yield insertTestTableData();
    yield getTestTableData();
}).catch((err) => { console.log(err) })*/

insertTestTableData();
getTestTableData();