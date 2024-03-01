import React from 'react'
// import {verticalTimeline, VerticalTimelineElement } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion';

import { styles } from '../styles';
// import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant} from '../utils/motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';


const Experience = () => {
  return (
   <>
   <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
<VerticalTimeline>
  { Experience.map((experience, index) => (
   <ExperienceCard key={ index } experience ={experience} />
   )) }

</VerticalTimeline>

    </div>
   </>
  )
}

export default SectionWrapper(Experience, "work")