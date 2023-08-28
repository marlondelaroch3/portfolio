import React from 'react'
import Gmail from './icons/contact/Gmail'
import Github from './icons/contact/Github'
import Linkedin from './icons/contact/Linkedin'
import Phone from './icons/contact/Phone'
import Link from 'next/link'

const SOCIAL_NETWORKS = [
    {
        title: 'Gmail',
        image: <Gmail />,
        link: 'mailto:marlondelaroch3@gmail.com'
    },
    {
        title: 'Github',
        image: <Github />,
        link: 'https://github.com/marlondelaroch3'
    },
    {
        title: 'Linkedin',
        image: <Linkedin />,
        link: 'https://www.linkedin.com/in/marlondelaroch3/'
    },
    {
        title: 'Phone',
        image: <Phone />,
        link: 'tel:+573228048771'
    }
]

const Contact = () => {
    return (
        <footer className='h-auto w-screen mb-5 flex justify-center' id="contact" >
            <div className='flex justify-center w-max'>
                {SOCIAL_NETWORKS.map(({ title, image, link }) => {
                    return (
                        <div key={title.toLowerCase()}>
                            <Link href={link} target='_blank'>
                                {image}
                            </Link>
                        </div>)
                })
                }
            </div>
        </footer>
    )
}
export default Contact
