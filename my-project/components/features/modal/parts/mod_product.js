import React from "react";
import { useGlobalContext } from "../../../../utils/context";

export default function ModalProduct({ type }) {
    const {addProduct, setAddProduct, action,itemTomodify} = useGlobalContext()

    return (
        <>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nom du produit
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={action?itemTomodify.NomProduit:"Nom du produit"} required  onChange={(e) => {
                            setAddProduct({ ...addProduct, nomProduit: e.target.value });
                        }}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 relative">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Unité
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder={action? itemTomodify.Unité:"0"} required min="0" onChange={(e) => {
                            setAddProduct({ ...addProduct, unité: e.target.value });
                        }}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Prix unitaire HT
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder={action?itemTomodify.PrixUnitaire + " DT":"0 DT"} required min="0" onChange={(e) => {
                            setAddProduct({ ...addProduct, prixUnitaire: e.target.value });
                        }}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        TVA (%)
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder={action?itemTomodify.TVA + "%":"Exemple: 10%"} required min="0" onChange={(e) => {
                            setAddProduct({ ...addProduct, TVA: e.target.value });
                        }}/>
                    </div>
                </div>
            </form>
        </>
    );
}