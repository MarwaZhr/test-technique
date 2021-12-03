import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [addUser, setAddUser] = useState({ nom: "", prenom: "", login: "", email: "", password: "" })
	const [addProduct, setAddProduct] = useState({ nomProduit: "", unité: null, prixUnitaire: null, TVA: null })
	const [addClient, setAddClient] = useState({ code: null, Prénom: "", Nom: "", type: "Entreprise", NomEntreprise: "", adresse: "" })
	const [action, setAction] = useState("")
	const [listClient, setListClient] = useState()
	const [listUser, setListUser] = useState()
	const [listProduct, setListProduct] = useState()
	const [controlerListe, setControlerListe] = useState(false)
	const [itemTomodify, setItemTomodify] = useState();

	const getListOfUsers = () => {
        axios.get(`http://localhost:3001/api/liste/${'utilisateurs'}`).then((result) => {
            setListUser(result.data)
        })
    }

	const getListOfProducts = () => {
        axios.get(`http://localhost:3001/api/liste/${'produits'}`).then((result) => {
            setListProduct(result.data)
        })
    }

	const getListOfClients = () => {
        axios.get(`http://localhost:3001/api/liste/${'client'}`).then((result) => {
            setListClient(result.data)
        })
    }

    useEffect(() => {
        getListOfUsers();
		getListOfProducts();
		getListOfClients();
      }, [controlerListe]);

	// For the sidebar
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	// for the model part
	const openShowModal = () => {
		setShowModal(true);
	}
	const closeShowModal = () => {
		setShowModal(false);
	}
	return (
		<AppContext.Provider
			value={{ isSidebarOpen, openSidebar, closeSidebar, openShowModal, closeShowModal, showModal, addClient, addProduct, addUser, setAddClient, setAddProduct, setAddUser,
				 setAction, action, listClient, listProduct, listUser, controlerListe,setControlerListe,setItemTomodify, itemTomodify }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };