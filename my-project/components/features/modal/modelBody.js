import React from "react";
import ModalClient from "./parts/mod_client";
import ModalProduct from "./parts/mod_product";
import ModalUser from "./parts/mod_user";

export default function ModalBody({ type }) {
    if (type === "Client") {
        return (
        <ModalClient />
        )
    } else if (type === "Produit") {
         return (<ModalProduct />)
    } else {
       return (<ModalUser />)
    }
    
}