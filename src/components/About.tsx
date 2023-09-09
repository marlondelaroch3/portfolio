'use client'

import React, { useState } from 'react'
import { montserrat, hind_madurai } from '../fonts'
import Image from 'next/image'
import Link from 'next/link'
import ReactCardFlip from "react-card-flip";
import ClickHere from './icons/about/ClickHere';

const About = () => {
    const [flip, setFlip] = useState(false);
    const FLIP_DIRECTION = "horizontal";
    return (
        <section className="h-auto w-full flex flex-col items-center  mb-8" id="about" >
            <div className='h-auto mb-5 w-full'>
                <ReactCardFlip isFlipped={flip} flipDirection={FLIP_DIRECTION}>
                    <div className='flex justify-evenly flex-col items-center h-[100vh]'>
                        <div className='bg-gradientCustom w-full h-[80vh] flex flex-col rounded-sm tablet:w-3/4 desktop:w-3/4 lgDesktop:w-3/4' onClick={() => setFlip(!flip)}>
                            <div className='h-2/4 flex items-end justify-center'>
                                <h1 className={`${montserrat.className} text-center font-semibold text-5xl text-whiteCustom w-max mb-5 tablet:text-7xl tablet:leading-[80px]`}>Hola, soy
                                    <p className='font-extralight'>Marlon</p>
                                </h1>
                            </div>
                            <div className='h-2/4 flex flex-col items-center justify-center'>
                                <ClickHere className="animate-clickHere h-2/4 cursor-pointer" />
                                <div className='h-2/4 w-full flex items-end justify-end'>
                                    <h3 className='text-whiteCustom pr-5 pb-8 bottom-0 font-extralight italic tablet:text-2xl'>{`<Front-End Developer Mid>`}</h3>
                                </div>
                            </div>
                        </div>
                        <Image className='animate-bounce' src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" />
                    </div>
                    <div className='flex justify-evenly flex-col items-center h-[100vh]'>
                        <div className='bg-gradientCustom w-full h-[80vh] flex justify-center items-center rounded-sm p-8 tablet:w-3/4 desktop:w-3/4 lgDesktop:w-3/4' onClick={() => setFlip(!flip)}>
                            <p className={`${hind_madurai.className} text-whiteCustom text-sm text-center font-extralight tablet:w-4/5 tablet:leading-8 tablet:text-xl `} >Con experiencia en ReactJS Redux, VTEX IO y Typescript. Me gusta trabajar en nuevas funcionalidades y mejorar las existentes. He liderado equipos en diferentes rubros para los consecución de objetivos de la forma más eficiente. Participé en proyectos para grandes empresas de Estados Unidos, Colombia, Chile y México, teniendo la oportunidad de liderar uno de ellos.</p>
                        </div>
                        <Image className='animate-bounce' src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" />
                    </div>
                </ReactCardFlip>
            </div>
        </section>
    )
}

export default About
