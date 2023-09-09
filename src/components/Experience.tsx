import React from 'react';
import { montserrat, lora, hind_madurai } from '../fonts';
import Quotes from './icons/experience/Quotes';
import Image from 'next/image'

const Experience = () => {
    return (
        <section className='h-auto mb-14' id='experience' >
            <div>
                <div className='flex justify-between mt-32 w-[100%]'>
                    <div className='bg-purpleColor w-[47%] h-[10rem]  flex items-center hover:scale-[105%] shadow-xl shadow-black' >
                        <h1 className={`${montserrat.className} text-whiteCustom font-bold ml-2 text-[2.5rem] leading-none tracking-wider  whitespace-pre-line mb-0`}>
                            EXPE
                            RIEN
                            CIA
                        </h1>
                    </div>

                    <div className='bg-purpleColor w-[47%] h-[10rem] flex items-center justify-center hover:scale-[105%] shadow-xl shadow-black tablet:'>
                        <h1 className={`${montserrat.className} text-whiteCustom font-bold text-[1.4rem]`} >{`{rochcode}`}</h1>
                    </div>
                </div>

                <div className='mt-16'>
                    <div className='flex ml-2 mb-1'>
                        <h1 className={`${montserrat.className} text-whiteCustom font-semibold mt-1 ml-1 text-xs`}>Front-End Developer</h1>
                    </div>

                    <h3 className={`${montserrat.className} text-whiteCustom mt-5 mb-2 ml-5 font-light italic text-xs `}>ITGlobers</h3>

                </div>
                <div className='flex justify-items-end mt-4 flex-col' >
                    <p className={`${hind_madurai.className} text-whiteCustom text-sm ml-5 mr-5  relative`}><Quotes className='inline-block mb-[5%] scale-x-[-1] scale-y-[-1] mr-1 absolute left-[-5.5%]' />Realicé soporte a un ecommerce en funcionamiento,  llevé a cabo la implementación de servicios externos para la gestión de publicidad, configuré flujos de autenticación, logré optimizaciones en rendimiento y asumí un rol de liderazgo al encabezar un equipo de trabajo.<Quotes className='inline-block ml-1 mb-[5%]' /></p>

                </div>
                <div className='flex justify-end mb-10'>
                    <h3 className={`${montserrat.className} text-whiteCustom mt-6 mr-2 mb-2 font-light italic text-xs`}>Mayo 2022 - Agosto 2023</h3>
                </div>

                <div className='flex justify-center mt-14 mb-10'>
                    <Image className='animate-bounce' src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" />
                </div>


            </div>

        </section>
    )
}
/* Front-End Developer
ITGlobers 
| Mayo 2022 - Enero 2023 */
export default Experience
