import React from 'react';
import { montserrat, hind_madurai } from '../fonts';

const Tools = () => {
    return (
        <section className='h-auto mb-14' id='experience' >
            <div className='flex justify-center mb-1'>
                <h1 className={`${montserrat.className} text-whiteCustom font-semibold mt-1 text-xs desktop:text-lg`}> Herramientas que utilizo </h1>
            </div>
            <div className='mt-4 ml-[9px] flex-col' >
                <p className={`${hind_madurai.className} text-whiteCustom text-center text-sm mr-[0.625rem] ml-[0.625rem] desktop:text-xl relative`}>
                    Javascript - Typescript - ReactJS - NextJS - Redux - VTEX IO - NodeJS -  Express - Sequelize - TailwindCSS - Sass - Less</p>
            </div>

        </section>
    )
}

export default Tools
