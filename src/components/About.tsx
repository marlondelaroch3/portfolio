import React from 'react'
import { montserrat, hind_madurai } from '../fonts'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <section id="about" className="h-screen flex flex-col items-center">
            <h1 className={`${montserrat.className} text-center mb-7 font-medium text-3xl text-whiteCustom`}>Hola, soy<p className='font-semibold'>Marlon</p></h1>
            <p className={`${hind_madurai.className} text-whiteCustom text-sm text-justify mb-7`}>Front-End Developer Mid con experiencia en ReactJS Redux, VTEX IO y Typescript. Me gusta trabajar en nuevas funcionalidades y mejorar las existentes. He liderado equipos en diferentes rubros para los consecución de objetivos de la forma más eficiente. Participé en proyectos para grandes empresas de Estados Unidos, Colombia, Chile y México, teniendo la oportunidad de liderar uno de ellos.</p>
            <Link href="#experience" className='border border-solid border-black rounded-full animate-bounce border-whiteCustom'><Image src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" className="" /></Link>
        </section>
    )
}

export default About
