import { ProjectProps } from '@/types'
import React from 'react'
import Card from './Card'
import { montserrat } from '../fonts'

const PROJECTS: Array<ProjectProps> = [
    {
        image: "/assets/easy_cl.png",
        title: "Easy Chile",
        link: "https://www.easy.cl/",
        alt: "página web de easy chile",
        text: "Llevé acabo el soporte de la web e implementé la tecnología AMP para la administración de la publicidad.",
        backgroundColor: "purpleColor"
    },
    {
        image: "/assets/renaware_usa.png",
        title: "Renaware USA",
        link: "https://www.renaware.com/",
        alt: "página web de easy chile",
        text: "Implementé el flujo completo de autenticación con VTEX IO, desde el inicio de sesión hasta el perfíl y todas sus configuraciones.",
        backgroundColor: "mainBgColor"
    },
    {
        image: "/assets/chedraui_mx.png",
        title: "Chedraui MX",
        link: "https://www.chedraui.com.mx/",
        alt: "página web de easy chile",
        text: "Mejoré apróximadamente en un 40% el rendimiento de la página web.",
        backgroundColor: "purpleColor"
    },
    {
        image: "/assets/repuestodo_cl.png",
        title: "Repuestodo Chile",
        link: "",
        alt: "página web de repuestodo chile",
        text: "Primera experiencia liderando un equipo desde el inicio del proyecto hasta tener la página lista para la carga en el backoffice. En este proyecto trabajé en diversas funcionalidades core, tales como un Slider de testimonios, todo el home de la página, y principalmente la funcionalidad más importante, La posibilidad de hacer una búsqueda a través de compatibilidades, entre un producto y diversas marcas, modelos, cilindradas y años de automoviles.",
        backgroundColor: "mainBgColor"
    }
]


const Projects = () => {
    return (
        <section className='h-auto mb-14' id="projects" >
            <div className='flex justify-center mt-20 mb-10 w-full'>
                <h1 className={`${montserrat.className} text-whiteCustom font-bold text-3xl`}>PROYECTOS</h1>
            </div>

            <div className=''>
                {PROJECTS.map(({ image, title, link, alt, text, backgroundColor }) => <Card key={title.toLowerCase()} image={image} title={title} link={link} alt={alt} text={text} backgroundColor={backgroundColor}/>)}
            </div>

        </section>
    )
}

export default Projects
