const { addNewProduct, addNewUser, addNewClient, listClient, listUser, listProduct, updateClientList, updateUserList,updateProductList,deleteProduct,deleteClient,deleteUser } = require('../queries/query')

//This function is used to add the product, the user or the client
const handleAddFunction = (req, res) => {
    const { type, addClient, addUser, addProduct } = req.body
    if (type === "Produit") {
        addNewProduct(addProduct)
            .then(() => { res.status(204).send("Produit ajouté") })
            .catch((err) => { res.status(400).send(err) })
    } else if (type === "Utilisateur") {
        console.log(addUser);
        addNewUser(addUser)
            .then(() => { res.status(204).send("Utilisateur ajouté") })
            .catch((err) => { res.status(400).send(err) })
    } else if (type === "Client") {
        addNewClient(addClient)
            .then(() => { res.status(204).send("Client ajouté") })
            .catch((err) => { res.status(400).send(err) })
    }
}

// This function is used to get the list of user, client or product
const getlists = (req, res) => {
    const { type } = req.params;
    if (type === "client") {
        listClient()
            .then((result) => {
                res.status(200).json(result[0]);
            })
            .catch((err) => { res.status(400).send(err) })
    } else if (type === "produits") {
        listProduct()
            .then((result) => {
                res.status(200).json(result[0]);
            })
            .catch((err) => { res.status(400).send(err) })
    } else if (type === "utilisateurs") {
        listUser()
            .then((result) => {
                res.status(200).json(result[0]);
            })
            .catch((err) => { res.status(400).send(err) })
    }

}

//used to update the user, client or product
const updateList = (req, res) => {
    const { id, type } = req.params;
    console.log(req.body);
    if (type === "Client") {
        updateClientList(id, req.body)
        .then(() => { res.status(204).json('Modifié')})
        .catch((err) => res.status(401).send("erreur"))
    } else if (type==="Produit") {
        updateProductList(id, req.body)
        .then(() => { res.status(204).json('Modifié')})
        .catch((err) => res.status(401).send("erreur"))
    } else if (type ==="Utilisateur") {
        updateUserList(id, req.body)
        .then(() => { res.status(204).json('Modifié')})
        .catch((err) => res.status(401).send("erreur"))
    }

}

//used to delete user, product or client
 
const deleteItem = (req, res) => {
    const { id, type } = req.params;
    if (type === "Client") {
        deleteClient(id)
        .then(() => { res.status(204).json('supprimer')})
        .catch((err) => res.status(401).send("erreur"))
    } else if (type==="Produit") {
        deleteProduct(id)
        .then(() => { res.status(204).json('supprimer')})
        .catch((err) => res.status(401).send("erreur"))
    } else if (type ==="Utilisateur") {
        deleteUser(id)
        .then(() => { res.status(204).json('supprimer')})
        .catch((err) => res.status(401).send("erreur"))
    }
}

module.exports = {
    handleAddFunction,
    getlists,
    updateList,
    deleteItem

}