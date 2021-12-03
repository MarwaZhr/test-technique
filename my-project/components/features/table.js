import React, { useState, useEffect } from 'react';
import Pagination from './pagination';
import { useGlobalContext } from '../../utils/context';

export default function Table({ title, type }) {
    const { openShowModal, setAction, listClient, listUser, listProduct, controlerListe,setItemTomodify } = useGlobalContext()
    const [liste, setListe] = useState()

    const handleListFunc = () => {
        if (type === "Produit") {
            setListe(listProduct)
        } else if (type === "Utilisateur") {
            setListe(listUser)
        } else if (type === "Client") {
            setListe(listClient)
        }
    }
    useEffect(() => {
        handleListFunc()
    }, [listClient,listProduct, listUser, controlerListe]);
    return (

        <div className="">
            <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-green-100 text-gray-600 uppercase text-sm leading-normal">
                        {
                            title.map((item, index) => {
                                return (<th className="py-3 px-6 text-left" key={index}>{item}</th>)
                            })
                        }
                        <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {liste ? liste.map((item, index) =>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                    </div>
                                    <span className="font-medium">{type==="Client" ?item.Code : type==="Utilisateur" ? item.Nom + " " + item.Prénom : item.NomProduit  }</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                    </div>
                                    {type==="Client"?<span className="font-normal justify-center">{item.Type === "Entreprise" ? item.NomEntreprise : item.Nom + " " + item.Prénom}</span>:
                                    <span className="font-normal justify-center">{type === "Utilisateur" ? item.Login : item.Unité}</span>
                                    }
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                    </div>
                                    <span className="font-normal justify-center">{type==="Client" ?item.Type : type==="Utilisateur" ? item.Password  : item.PrixUnitaire  }</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                    </div>
                                    <span className="font-normal justify-center">{type==="Client" ?item.Adresse : type==="Utilisateur" ? item.Email  : item.TVA  }</span>
                                </div>
                            </td>
                                
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => { setAction("update"); openShowModal(); setItemTomodify(item); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td> 
                        </tr>) :
                        ""
                    }


                </tbody>
            </table>
            <Pagination />
        </div>
        //     </div>
        // </div>
        // </div>
    )
}