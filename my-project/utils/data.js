import React from 'react';
import {FaHome} from 'react-icons/fa';
import { BsFileEarmarkPersonFill } from 'react-icons/bs'
import { AiFillShop } from 'react-icons/ai'
import { HiTicket } from 'react-icons/hi';
export const links = [
    {
        id: 1,
        url: '/',
        text: 'Accueille',
        icon: <FaHome className="w-5 h-5" />,
    },
    {
        id: 2,
        url: '/client',
        text: 'Gestion clients ',
        icon: <BsFileEarmarkPersonFill className="w-5 h-5" />,
    },
    {
        id: 3,
        url: '/produit',
        text: 'Gestion produits',
        icon: <AiFillShop className="w-5 h-5" />,
    },
    {
        id: 4,
        url: '/',
        text: 'Bon de commande',
        icon: <HiTicket className="w-5 h-5" />,
    }
];

