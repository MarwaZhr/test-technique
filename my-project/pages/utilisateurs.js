import React, {useEffect} from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Modal from '../components/features/modal/modal.js';
import Table from '../components/features/table';
import { useGlobalContext } from '../utils/context';
import axios from "axios";


 function Utilisateurs() {
    const {openShowModal, setAction, setItemTomodify} = useGlobalContext()
    const userColTitle = ["Nom et Prénom", "Login","Password", "Email"]

    return (
        <>
            <div className="grid grid-cols-6 gap-4  py-2 ">
                <h1 className="col-start-2 col-span-4 px-5 mx-4 font-medium text-gray-700 text-2xl pt-6">Gestion des utilisateurs</h1>
            </div>
            <div className="grid grid-cols-6 gap-4  pl-11 pt-5 ">
                <div className=" flex col-start-2 col-span-4  justify-end ">
                    <div className="">
                        <button className=" bg-green-500 text-white active:bg-green-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={()=> {setAction(""); openShowModal()}}>
                            <div className="flex row"><AiOutlinePlusCircle className="w-5 h-5 " /> <span>Ajouter un utilisateur</span></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-4  pl-11 pt-5 ">
                <div className=" flex-grow col-start-2 col-span-4 p-8 rounded-md shadow-md  justify-center ">
                        <Table title={userColTitle} type={"Utilisateur"}/>
                </div>
            <Modal type={"Utilisateur"}/>
            </div>
        </>
    )
}

export default React.memo(Utilisateurs);