import React from 'react'
// import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { ComponentCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'> Hero
    <div className={`${styles.paddingX}
    absolute insert-0 top-[120px] max-w-7xl mx-auto 
    flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center
      items-centre mt-5 ">
        <div className='w-5 h-5 rounded-full bg-[#915eff]'>
        <div className='w-1 sm:h-80 h-40 violet-gradient ml-2 mt-2'>

        </div>
        </div>

      </div>

    </div>
    
    </section>
  )
}

export default Hero