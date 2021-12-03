import React from "react";
import Link from "next/link";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
export default function Pagination() {


    return (
        <div className=" flex py-2 justify-center pt-4">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <div className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-black text-white bg-gray-700">
                        <MdKeyboardArrowLeft className="w-5 h-5" />
                        </div>
                    </li>
                    <li>
                        <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500">
                            1
                        </a>
                    </li>
                    <li>
                        <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-200 text-white bg-gray-200">
                            2
                        </a>
                    </li>
                    <li>
                        <div  className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-200 bg-white text-gray-400">
                        <MdKeyboardArrowRight className="w-5 h-5" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}