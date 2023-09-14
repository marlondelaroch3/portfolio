import React from 'react';
import { montserrat, lora, hind_madurai } from '../fonts';
import Quotes from './icons/experience/Quotes';
import Image from 'next/image'
import RochCode from './icons/experience/RochCode';

const Experience = () => {
    return (
        <section className='h-auto mb-14' id='experience' >
            <div className='flex flex-col items-center'>
                <div className='flex justify-between mt-32 w-full'>
                    <div className='bg-purpleColor w-[47%]  flex items-center hover:scale-[105%] shadow-xl shadow-black tablet:w-[45%] tablet:h-[12.5rem] desktop:h-[15.6rem] lgDesktop:h-[20rem]' >
                        <h1 className={`${montserrat.className} text-whiteCustom font-bold ml-2 text-[2.5rem] leading-none tracking-wider  whitespace-pre-line mb-0 w-min tablet:ml-7 tablet:text-[4.0rem] desktop:text-[3.6rem] lgDesktop:text-[6rem]`}>
                            EXPE
                            RIEN
                            CIA
                        </h1>
                    </div>

                    <div className='bg-purpleColor w-[47%] h-[10rem] flex items-center justify-center hover:scale-[105%] shadow-xl shadow-black tablet:w-[45%] tablet:h-[12.5rem]  desktop:h-[15.6rem] lgDesktop:h-[20rem]'>
                        <h1 className={`${montserrat.className} text-whiteCustom font-bold text-[1.4rem]`} ><RochCode className='w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] lgDesktop:w-[300px] lgDesktop:h-[300px]' /></h1>
                    </div>
                </div>
                <div className='w-[90%] desktop:w-[100%]'>
                    <div className='mt-16 ml-[1.063rem]'>
                        <div className='flex mb-1'>
                            <h1 className={`${montserrat.className} text-whiteCustom font-semibold mt-1 text-xs desktop:text-lg`}>Front-End Developer</h1>
                        </div>
                        <h3 className={`${montserrat.className} text-whiteCustom mt-5 mb-2 font-light italic text-xs desktop:text-lg`}>ITGlobers</h3>

                    </div>
                    <div className='mt-4 ml-[9px] flex-col' >
                        <p className={`${hind_madurai.className} text-whiteCustom text-sm mr-[0.625rem] ml-[0.625rem] desktop:text-xl relative`}>
                            <Quotes className='inline-block mb-[5%] scale-x-[-1] scale-y-[-1] mr-1 absolute left-[-7%] min-[500px]:left-[-4%] tablet:left-[-3%] desktop:left-[-2.5%] min-[1500px]:left-[-2%]' />Realicé soporte a un ecommerce en funcionamiento,  llevé a cabo la implementación de servicios externos para la gestión de publicidad, configuré flujos de autenticación, logré optimizaciones en rendimiento y asumí un rol de liderazgo al encabezar un equipo de trabajo.
                            <Quotes className='inline-block ml-[0.75rem] mb-[2%]' /></p>

                    </div>
                    <div className='flex justify-end mb-10'>
                        <h3 className={`${montserrat.className} text-whiteCustom mt-6 mr-2 mb-2 font-light italic text-xs desktop:text-lg`}>Mayo 2022 - Agosto 2023</h3>
                    </div>

                </div>
                <div className='flex justify-center mt-14 mb-10'>
                    <Image className='animate-bounce' src="/assets/arrow.png" alt='arrow to bottom' width="28" height="28" />
                </div>


            </div>

        </section>
    )
}
export default Experience
