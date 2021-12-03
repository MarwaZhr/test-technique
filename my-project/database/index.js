const mysql = require("mysql2");
const createTables = require("./config");
const env = require("./env.js")
const Promise = require("bluebird");
const database = "Fournisseur";

const connection = mysql.createConnection({
  user: "root",
  password: "new-password",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() =>
    console.log(`Connected to ${database} database as ID ${db.threadId}`)
  )
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

  module.exports = {
    db
  }