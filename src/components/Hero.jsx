import React from 'react'
// import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'> Hero
    <div className={`${styles.paddingX}
    absolute insert-0 top-[120px] max-w-7xl mx-auto 
    flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center
      items-centre mt-5 ">
        <div className='w-5 h-5 rounded-full bg-[#915eff]'>
        <div className='w-1 sm:h-80 h-40 violet-gradient ml-2 mt-5'>

        </div>
       
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} 
          text-white`}>  &nbsp; Hi, I'm <span className='text-[#915eff]'>
            Lalla

          </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ml-6 text-white-100`}>
          A full-stack developer, I develop  <br className='sm:block hidden'/> seamless web applications 
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </div>
 
    </section>
  )
}

export default Hero