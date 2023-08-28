'use client'

import useSmoothScroll from '@/hooks/smoothScroll'
import React from 'react'
import About from './icons/nav/About'
import Experience from './icons/nav/Experience'
import Projects from './icons/nav/Projects'
import Contact from './icons/nav/Contact'



const SideNav = () => {
    useSmoothScroll()

    const MENU_ITEMS = [
        {
            image: <About />,
            link: "#top",
            label: "About"
        },
        {
            image: <Experience />,
            link: "#experience",
            label: "Experience"
        },
        {
            image: <Projects />,
            link: "#projects",
            label: "Projects"
        },
        {
            image: <Contact />,
            link: "#contact",
            label: "Contact"
        }
    ]

    return (
        <nav className='h-auto fixed bottom-0 p-5'>
            <ul className='flex '>
                {MENU_ITEMS.map(({ image, link, label }) => <li key={label.toLowerCase()}><a href={link}>{image}</a></li>)}
            </ul>
        </nav>
    )
}

export default SideNav
