const {db} = require('../../database/index.js');

// add New product
const addNewProduct = (product) => {
    return db.queryAsync(`INSERT INTO products (NomProduit, Unité, PrixUnitaire, TVA) VALUES ('${product.nomProduit}','${product.unité}','${product.prixUnitaire}','${product.TVA}')`)
}

// add New User 
const addNewUser = (user) => {
    return db.queryAsync(`INSERT INTO users (Nom, Prénom, Login, Password, Email) VALUES ('${user.nom}','${user.prenom}','${user.login}','${user.password}', '${user.email}')`)
}
//add New Client
const addNewClient = (client) => {
    if (client.type === "Entreprise") return db.queryAsync(`INSERT INTO clients (Code, NomEntreprise, Adresse, Type) VALUES ('${client.code}','${client.NomEntreprise}', '${client.adresse}','${client.type}')`)
    return db.queryAsync(`INSERT INTO clients (Code, NomClient, PrénonClient, Adresse, Type) VALUES ('${client.code}','${client.Nom}','${client.Prénom}', '${client.adresse}','${client.type}')`)
}

//get client liste
const listClient = () => {
    return db.queryAsync(`SELECT * FROM clients`)
}
//get user list
const listUser = () => {
    return db.queryAsync(`SELECT * FROM users`)
}
//get product list
const listProduct = () => {
    return db.queryAsync(`SELECT * FROM products`)
}

// update client list
const updateClientList = (id, obj) => {
   
    return db.queryAsync(`UPDATE clients SET ? WHERE clientID=${id}`, [obj])
}

// update user list
const updateUserList = (id, obj) => {
   
    return db.queryAsync(`UPDATE users SET ? WHERE userID=${id}`, [obj])
}
// update product list
const updateProductList = (id, obj) => {
   
    return db.queryAsync(`UPDATE products SET ? WHERE id=${id}`, [obj])
}
module.exports = {
    addNewProduct,
    addNewUser,
    addNewClient,
    listProduct,
    listUser,
    listClient,
    updateClientList,
    updateProductList,
    updateUserList
}