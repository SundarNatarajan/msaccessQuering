
## Pre-Requisites ##
- this was tested with Access 2013.
- install the OLEDB Access engine locally using the following link:
https://www.microsoft.com/en-us/download/confirmation.aspx?id=23734

## Config details ##
Config details are mentioned in lib/config.json
```js
dbConnString : ''  // mention the ms access db connection details
/*
example 
dbConnString : 'Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\\Users\\sundar.natarajan\\Documents\\testDB.accdb;Persist Security Info=False;'
*/
```

## Steps To Execute ##
- Make sure you have installed node js version > 6.2.0 to run it as a standalone application
- Run the below for the first time project set up, will install the dependency node modules mentioned in package.json
```cmd
$ npm install
```
- To run the application
```cmd
$ node index.js
```