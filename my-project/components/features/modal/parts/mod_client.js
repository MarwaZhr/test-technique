import React, {useEffect} from "react";
import { useGlobalContext } from "../../../../utils/context";
import $ from "jquery";

export default function ModalClient({ type }) {
    const { addClient, setAddClient, action, itemTomodify } = useGlobalContext()
    useEffect(() => {
        if( action) {
        $('#type_Client').val((itemTomodify.Type)).prop('selected', true);  }
      }, [])

    return (
        <>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Code
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action? itemTomodify.Code: "Exemple: E001"} required onChange={(e) => {
                            setAddClient({ ...addClient, code: e.target.value });
                        }} />
                    </div>
                    <div className="w-full md:w-1/2 px-3 relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Type
                        </label>
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="type_Client"

                            onChange={(e) => {
                                setAddClient({ ...addClient, type: e.target.value });
                            }}>
                            <option value="Entreprise" >Entreprise</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 pt-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="">
                    {(action && addClient.type  === "Entreprise" &&itemTomodify.Type  === "Entreprise"  )  ||(addClient.type  === "Entreprise"  ) ?
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Nom de l'entreprise
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nom" type="text" placeholder={!action?"Exemple: Tokyo tv" :  itemTomodify.NomEntreprise } required onChange={(e) => {
                                    setAddClient({ ...addClient, NomEntreprise: e.target.value });
                                }} />
                            </div>
                        </div>
                        : 
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Nom
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action? itemTomodify.NomClient:"Exemple: Amina"} required onChange={(e) => {
                                    setAddClient({ ...addClient, Nom: e.target.value });
                                }} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Prénom
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={action?itemTomodify.PrénomClient: "Exemple: Amri"} required onChange={(e) => {
                                    setAddClient({ ...addClient, Prénom: e.target.value });
                                }} />
                            </div>
                        </div>
                    }

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Adresse
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder={action?itemTomodify.Adresse:"Exemple: 19 rue des poissons ..."} required onChange={(e) => {
                            setAddClient({ ...addClient, adresse: e.target.value });
                        }} />
                    </div>
                </div>
            </form>
        </>
    );
}