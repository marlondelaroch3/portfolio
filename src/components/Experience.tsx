import React from 'react'
import { montserrat, lora, hind_madurai } from '../fonts'

const Experience = () => {
    return (
        <section className='h-auto mb-14' id='experience' >
            <div>
                <h1 className={`${montserrat.className} text-whiteCustom font-bold mb-5 text-xl`}>EXPERIENCIA</h1>
                <h1 className={`${montserrat.className} text-whiteCustom mb-2 font-semibold text-xs`}>Front-End Developer</h1>
                <h3 className={`${montserrat.className} text-whiteCustom mb-2 font-light italic text-xs `}>ITGlobers</h3>
                <h3 className={`${montserrat.className} text-whiteCustom mb-2 font-light italic text-xs`}>Mayo 2022 - Agosto 2023</h3>
            </div>
            <p className={`${hind_madurai.className} text-whiteCustom text-sm`}>Realicé soporte a un ecommerce en funcionamiento,  llevé a cabo la implementación de servicios externos para la gestión de publicidad, configuré flujos de autenticación, logré optimizaciones en rendimiento y asumí un rol de liderazgo al encabezar un equipo de trabajo.</p>
        </section>
    )
}
/* Front-End Developer
ITGlobers 
| Mayo 2022 - Enero 2023 */
export default Experience
