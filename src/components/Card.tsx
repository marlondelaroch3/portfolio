import { ProjectProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { montserrat, hind_madurai } from '../fonts'


const Card = ({ image, title, link, alt, text, backgroundColor }: ProjectProps) => {
    return (
        <Link className='h-max block' target="_blank" href={link} >
            <div className={`bg-${backgroundColor} flex flex-wrap p-2 mt-5 ml-2 mb-7 mr-2 justify-center shadow-xl shadow-black`}>
                <div className='border-b-2 border-'>
                  <h2 className={`${montserrat.className} text-whiteCustom mb-0 font-light text-2xl `}>{title}</h2>  
                </div>
                <div>
                 <p className={`${hind_madurai.className} text-whiteCustom text-justify text-l mb-5 mt-4 `}>{text}</p>   
                </div>
                <div>
                  <Image className='mb-1 rounded-sm'  width={500} height={500} key={title.toLowerCase()} src={image} alt={alt} />  
                </div>
                
            </div>
        </Link>
    )
}

export default Card
