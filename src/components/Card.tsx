import { ProjectProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { montserrat, hind_madurai } from '../fonts'


const Card = ({ image, title, link, alt, text, backgroundColor }: ProjectProps) => {
  const content = (
    <div className={`bg-${backgroundColor} flex flex-col desktop:flex-row items-center p-4 mt-5 ml-2 mb-7 mr-2 justify-center shadow-xl shadow-black rounded-md hover:scale-105`}>
      <div className='desktop:w-1/2 desktop:p-5 desktop:flex desktop:flex-col desktop:items-start w-10/12'>
        <div className='border-b-2'>
          <h2 className={`${montserrat.className} text-whiteCustom mb-3 font-light text-2xl text-center`}>{title}</h2>
        </div>
        <p className={`${hind_madurai.className} text-whiteCustom text-justify mb-5 mt-4 desktop:text-left desktop:text-lg`}>{text}</p>
      </div>
      <div className='desktop:w-1/2 desktop:p-5 flex justify-center'>
        <Image className='rounded-sm mt-5 mb-5 desktop:m-0 shadow-lg shadow-neutral-950 hover:scale-105' width={500} height={500} key={title.toLowerCase()} src={image} alt={alt} />
      </div>
    </div>
  );

  return link ? (
    <Link className='h-max block' target="_blank" href={link}>
      {content}
    </Link>
  ) : (
    content
  );
}

export default Card
