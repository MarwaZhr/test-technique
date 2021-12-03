import React from "react";
import { useGlobalContext } from '../../utils/context';
import ALink from "../features/alink";



const Header = () => {
    const { openSidebar, isSidebarOpen } = useGlobalContext();

    return (
        <nav className="relative lg:flex-row flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="flex row">
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  outline-none focus:outline-none" type="button" onClick={() => openSidebar()}>
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                    <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" >
                        Fournisseur.TN
                    </p>

                </div>
                <div className={
                    "lg:flex flex-grow items-center" +
                    (isSidebarOpen ? " hidden" : " hidden")
                }
                    id="example-navbar-danger">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <ALink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/utilisateurs">
                                Gestion des utilisateurs
                            </ALink>
                        </li>
                        <li className="nav-item">
                            <ALink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
                             Déconnexion
                            </ALink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
};




export default Header;
