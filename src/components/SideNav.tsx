'use client'

import useSmoothScroll from '@/hooks/smoothScroll'
import React from 'react'


interface MenuItemsProps {
    link: string,
    label: string
}
const SideNav = () => {
    useSmoothScroll()

    const MENU_ITEMS:Array<MenuItemsProps> = [
        {
            link: "#top",
            label: "About"
        },
        {
            link: "#experience",
            label: "Experience"
        },
        {
            link: "#projects",
            label: "Projects"
        },
        {
            link: "#contact",
            label: "Contact"
        }
    ]

    return (
        <nav className='fixed right-0 top-2/4 p-5'>
            <ul>
                {MENU_ITEMS.map(({link, label}) => <li key={label.toLowerCase()}><a href={link}>{label}</a></li>)}
            </ul>
        </nav>
    )
}

export default SideNav
