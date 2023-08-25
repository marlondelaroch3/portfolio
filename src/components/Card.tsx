import { ProjectProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {montserrat, hind_madurai} from '../fonts'


const Card = ({ image, title, link, alt, text }: ProjectProps) => {
    return (
        <Link className='h-max block' target="_blank" href={link} >
            <h2 className={`${montserrat.className} text-whiteCustom mb-2 font-light text-xs`}>{title}</h2>
            <p className={`${hind_madurai.className} text-whiteCustom text-sm mb-5`}>{text}</p>
            <Image className='mb-5' width={500} height={500} key={title.toLowerCase()} src={image} alt={alt} />
        </Link>
    )
}

export default Card
