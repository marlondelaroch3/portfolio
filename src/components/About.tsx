'use client'

import React, { useState } from 'react'
import { montserrat, hind_madurai } from '../fonts'
import Image from 'next/image'
import Link from 'next/link'
import ReactCardFlip from "react-card-flip";
import ClickHere from './icons/about/ClickHere';

const About = () => {
    const [flip, setFlip] = useState(false);
    return (
        <section className="h-auto flex flex-col items-center mb-8" id="about" >
            <div className='h-auto mb-5'>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <div>
                        <div className='bg-gradientCustom w-72 h-85 flex flex-col rounded-sm' onClick={() => setFlip(!flip)}>
                            <div className='h-2/4 flex items-end justify-center'>
                                <h1 className={`${montserrat.className} text-center font-medium text-3xl text-whiteCustom w-max mb-5`}>Hola, soy
                                    <p className='font-semibold'>Marlon</p>
                                </h1>
                            </div>
                            <div className='h-2/4 flex flex-col items-center justify-center'>
                                <ClickHere className="animate-clickHere h-2/4" />
                                <div className='h-2/4 w-full flex items-end justify-end'>
                                    <h3 className='text-whiteCustom pr-5 pb-8 bottom-0'>{`<Front-End Developer Mid>`}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-gradientCustom w-72 h-85 flex items-center p-8' onClick={() => setFlip(!flip)}>
                            <p className={`${hind_madurai.className} text-whiteCustom text-sm text-center`} >Con experiencia en ReactJS Redux, VTEX IO y Typescript. Me gusta trabajar en nuevas funcionalidades y mejorar las existentes. He liderado equipos en diferentes rubros para los consecución de objetivos de la forma más eficiente. Participé en proyectos para grandes empresas de Estados Unidos, Colombia, Chile y México, teniendo la oportunidad de liderar uno de ellos.</p>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
            <Link className='border border-solid rounded-full animate-bounce border-whiteCustom' href="#experience" ><Image src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" /></Link>
            {/* <Rocket className="opacity-50 mb-14" /> */}
        </section>




    )
}

export default About
