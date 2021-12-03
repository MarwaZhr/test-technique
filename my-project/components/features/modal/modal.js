import React from "react";
import ModalBody from "./modelBody";
import { useGlobalContext } from "../../../utils/context";
import axios from 'axios';
import { sweetAlertFunc } from '../../../utils/index.js';

function Modal({ type }) {
  const { closeShowModal, showModal, addUser, addProduct, addClient, setAddClient, setAddProduct, setAddUser, action, controlerListe, setControlerListe,setItemTomodify, itemTomodify } = useGlobalContext()


  //clear the inputs
  const clearFun =() => {
    setAddUser({ nom: "", prenom: "", login: "", email: "", password: "" });
    setAddClient({ code: null, Prénom: "", Nom: "", type: "Entreprise", NomEntreprise: "", adresse: "" });
    setAddProduct({ nomProduit: "", unité: null, prixUnitaire: null, TVA: null });

  }
  //Funtion used to add
  const handleAddFunction = () => {
    if (type === "Utilisateur") {
      if (addUser.nom && addUser.prenom && addUser.login && addUser.email && addUser.password) {
        axios.post('http://localhost:3001/api/ajouter', { addUser, type }).then(result => {
          if (result.status === 204) {
            setAddUser({ nom: "", prenom: "", login: "", email: "", password: "" })
          }
        }).catch(() => {
          sweetAlertFunc("Le login et l'adresse email doivent être uniques !")
        })
      } else {
        sweetAlertFunc('Il faut remplir tous les champs !')
      }
    } else if (type === "Client") {
      if (addClient.code && ((addClient.Prénom && addClient.Nom) || addClient.NomEntreprise) && addClient.adresse) {
        axios.post('http://localhost:3001/api/ajouter', { addClient, type }).then(result => {
          if (result.status === 204) {
            setAddClient({ code: null, Prénom: "", Nom: "", type: "Entreprise", NomEntreprise: "", adresse: "" })
          }
        }).catch(() => {
          sweetAlertFunc("Le code  doit être unique !")
        })
      } else {
        sweetAlertFunc('Il faut remplir tous les champs!')
      }
    } else if (type === "Produit") {
      if (addProduct.nomProduit && addProduct.unité && addProduct.prixUnitaire && addProduct.TVA) {
        axios.post('http://localhost:3001/api/ajouter', { addProduct, type }).then(result => {
          if (result.status === 204) {
            setAddProduct({ nomProduit: "", unité: null, prixUnitaire: null, TVA: null })
          }
        }).catch(() => {
        })
      } else {
        sweetAlertFunc('Il faut remplir tous les champs!')
      }
    }
  }

  //fuction used to update
  const handleUpdateFun = (id) => {
    let modifiedObject = {}
    if (type === "Utilisateur" && itemTomodify.userID) {
      if (addUser.nom) {
        modifiedObject.Nom = addUser.nom
      } if (addUser.prenom) {
        modifiedObject.Prénom = addUser.prenom 
      } if (addUser.login) {
        modifiedObject.Login = addUser.login
      } if (addUser.password) {
        modifiedObject.Password = addUser.password
      } if (addUser.email) {
        modifiedObject.Email = addUser.email
      }
      axios.put(`http://localhost:3001/api/modifier/${type}/${itemTomodify.userID}`, modifiedObject).then(result => {
        if (result.status === 204) {
          setAddUser({ nom: "", prénom: "", login: "", email: "", password: "" })
        }
      }).catch(() => {
        sweetAlertFunc("Le login et l'adresse email doivent être uniques !")
      })

    } else if (type === "Client" && itemTomodify.clientID) {
        if (addClient.code) {modifiedObject.Code = addClient.code}
        if (addClient.Prénom) {modifiedObject.PrénomClient = addClient.Prénom }
        if (addClient.Nom) {modifiedObject.NomClient = addClient.Nom}
        if (addClient.type) {modifiedObject.Type = addClient.type}
        if (addClient.NomEntreprise ) {modifiedObject.NomEntreprise = addClient.NomEntreprise}
        if (addClient.adresse) {modifiedObject.Adresse = addClient.adresse}
      
      axios.put(`http://localhost:3001/api/modifier/${type}/${itemTomodify.clientID}`, modifiedObject).then(result => {
        if (result.status === 204) {
          setAddClient({ code: null, Prénom: "", Nom: "", type: "Entreprise", NomEntreprise: "", adresse: "" })
        }
      }).catch(() => {
        sweetAlertFunc("Une erreur s'est produite veuillez réessayer !")
      })

    } else if (type === "Produit" && itemTomodify.id) {
      if(addProduct.nomProduit) {modifiedObject.NomProduit = addProduct.nomProduit}
      if(addProduct.unité) {modifiedObject.Unité = addProduct.unité }
      if(addProduct.prixUnitaire) {modifiedObject.PrixUnitaire = addProduct.prixUnitaire}
      if(addProduct.TVA ) {modifiedObject.TVA = addProduct.TVA}

      axios.put(`http://localhost:3001/api/modifier/${type}/${itemTomodify.id}`, modifiedObject).then(result => {
        if (result.status === 204) {
          setAddProduct({ nomProduit: "", unité: null, prixUnitaire: null, TVA: null })
        }
      }).catch(() => {
      })

    }
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Ajouter un {type.toLowerCase()}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {closeShowModal();setItemTomodify(); clearFun()}}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ModalBody type={type} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {closeShowModal(); setItemTomodify(); clearFun()}}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-emerald-500 text-green-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-green-500 hover:text-white outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => { setControlerListe(!controlerListe); if (action) { handleUpdateFun(); setItemTomodify();setControlerListe(!controlerListe); } else { handleAddFunction() }; closeShowModal(); }}
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default React.memo(Modal);