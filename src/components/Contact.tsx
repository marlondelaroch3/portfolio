import React from 'react'
import Gmail from './icons/contact/Gmail'
import Github from './icons/contact/Github'
import Linkedin from './icons/contact/Linkedin'
import Phone from './icons/contact/Phone'
import Link from 'next/link'
import { montserrat } from '../fonts';

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
        link: 'https://wa.me/+573228048771'
    }
]

const Contact = () => {
    return (
        <footer className='h-auto w-full mt-10 mb-5 flex flex-col' id="contact" >
            
            <div className='flex flex-col justify-center w-full h-52'>

                <div className='flex justify-center'>
                    {SOCIAL_NETWORKS.map(({ title, image, link }) => {
                        return (
                            <div className='bg-gradientCustom border-b-4 border-l-4  p-1 rounded-full border-slate-600 border-[1px] m-1 shadow-md shadow-slate-900 animate-float' 
                            key={title.toLowerCase()}>
                                <Link href={link} target='_blank'>
                                    {image}
                                </Link>
                            </div>)
                    })
                    }
                </div>
                <div className='flex text-whiteCustom opacity-40 justify-center h-20 items-end '>
                <h3 className={`${montserrat.className} bottom-0 font-extralight italic`}>©️ RochCode 2023</h3>
                </div>

            </div>
        </footer>
    )
}
export default Contact
