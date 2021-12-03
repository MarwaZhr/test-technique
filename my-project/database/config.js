const Promise = require("bluebird");
module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create  tables
  return db
    .queryAsync(
      `
    CREATE TABLE IF NOT EXISTS users (
      userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      Nom VARCHAR(100),
      Prénom VARCHAR(100),
      Login VARCHAR(100) UNIQUE,
      Password VARCHAR(100),
      Email VARCHAR(255) UNIQUE
    )`
    )
    .then(() => {
      return db
        .queryAsync(
          ` 
            CREATE TABLE IF NOT EXISTS clients (
            clientID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            Code VARCHAR(100) NOT NULL  ,
            NomClient VARCHAR(100),
            PrénonClient VARCHAR(100),
            NomEntreprise VARCHAR(100),
            Adresse VARCHAR(500),
            Type VARCHAR(50)
            )
        `
        );
    })
    .then(() => {
      return db
        .queryAsync(
          ` 
            CREATE TABLE IF NOT EXISTS products (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            NomProduit VARCHAR(200),
            Unité INT,
            PrixUnitaire INT,
            TVA INT
            )
        `
        );
    })
    .error((err) => {
      console.log(err);
    });
};