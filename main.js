var ADODB = require('node-adodb');
// var connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');
var connection = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\Users\\sundar.natarajan\\Documents\\testDB.accdb;Persist Security Info=False;`);
/*ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\sundar.natarajan\Documents\testDB.accdb;Persist Security Info=False;`,function(err, res){
    console.log(err);
    console.log(`Test Console LOgs`);
    console.log(res);
});
*/
process.env.DEBUG = 'ADODB';

setTimeout(function() {
    connection
    .query('SELECT * FROM testTable')
    .on('done', function (data) {
        console.log('result:', JSON.stringify(data, null, '  '));
    })
    .on('fail', function (error) {
        console.log(error)
    });
}, 4000);

connection
    .execute('INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)')
    .on('done', function (data) {
        console.log('result:', JSON.stringify(data, null, '  '));
    })
    .on('fail', function (error) {
        console.log(error)
    });

connection
    .execute(
    'INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)',
    'SELECT @@Identity AS id'
    )
    .on('done', function (data) {
        console.log('result:', JSON.stringify(data, null, '  '));
    })
    .on('fail', function (error) {
        console.log(error)
    });

connection
    .query('SELECT * FROM testTable')
    .on('done', function (data) {
        console.log('result:', JSON.stringify(data, null, '  '));
    })
    .on('fail', function (error) {
        console.log(error)
    });