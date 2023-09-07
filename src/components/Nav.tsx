'use client'

import { montserrat } from '@/fonts'
import useSmoothScroll from '@/hooks/smoothScroll'
import React from 'react'



const Nav = () => {
    useSmoothScroll()

    const MENU_ITEMS = [
        {
            link: "#top",
            label: "Sobre mí"
        },
        {
            link: "#experience",
            label: "Experiencia"
        },
        {
            link: "#projects",
            label: "Proyectos"
        },
        {
            link: "#contact",
            label: "Contacto"
        }
    ]

    return (
        <nav className='h-auto w-full fixed top-0 p-5c tablet:pt-[2%] desktop:pr-1/5 desktop:pl-1/5 lgDesktop:pr-1/5 lgDesktop:pl-1/5'>
            <ul className='h-full pl-1 pr-1 flex items-center justify-evenly bg-mainBgColor bg-opacity-75 rounded-xl'>
                {MENU_ITEMS.map(({ link, label }) => <li className='p-1' key={label.toLowerCase()}><a className={`${montserrat.className} text-xs font-extralight italic text-whiteCustom `} href={link}>{label}</a></li>)}
            </ul>
        </nav>
    )
}

export default Nav
