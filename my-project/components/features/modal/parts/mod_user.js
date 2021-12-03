import React from "react";
import { useGlobalContext } from "../../../../utils/context";

export default function ModalUser({ type }) {
    const {addUser, setAddUser, action,itemTomodify} = useGlobalContext()

    return (
        <>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nom
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action?itemTomodify.Nom:"Exemple: Ahmed"} required onChange={(e) => {
                            setAddUser({ ...addUser, nom: e.target.value });
                        }}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Prénom
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action? itemTomodify.Prénom:"Exemple: Bouchnek"} required onChange={(e) => {
                            setAddUser({ ...addUser, prenom: e.target.value });
                        }} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-login">
                            Login
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action?itemTomodify.Login:"Exemple: Ahmed01"} required  onChange={(e) => {
                            setAddUser({ ...addUser, login: e.target.value });
                        }}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder={action?itemTomodify.Password:"************"} required min="8" onChange={(e) => {
                            setAddUser({ ...addUser, password: e.target.value });
                        }}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder={action?itemTomodify.Email: "Exemple: Ahmed@fournisseur.tn"} required onChange={(e) => {
                            setAddUser({ ...addUser, email: e.target.value });
                        }}/>
                        </div>
                    </div>
            </form>
        </>
    );
}