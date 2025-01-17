// import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

import { styles } from "../styles";
import { github } from "../assets";
import { live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(live_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live}
                alt='see Live'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
    </motion.div>
  );
};

const Works = () => {

const isExtraSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
const isSmallScreen = useMediaQuery({ query: '(min-width: 600px) and (max-width: 768px)' });
const isMediumScreen = useMediaQuery({ query: '(min-width: 768px) and (max-width: 992px)' });
const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' }); 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 3,
    slidesToShow: getSlidesToShow,
    slidesToScroll: 1,
  };

  // Function to determine the number of slides to show based on screen width
    function getSlidesToShow() {
      if (isExtraSmallScreen || isSmallScreen) {
        return 1;
      } else {
        return 3;
      }
    }
    
  
  


// Update slidesToShow dynamically based on screen width
settings.slidesToShow = getSlidesToShow();

  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20'>
      <Slider {...settings} className="my-slider slider-dots slider-dots-active">          {projects.map((project, index) => (
            <div key={`project-${index}`}>
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
