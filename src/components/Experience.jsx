import React from 'react'
import {verticalTimeline, VerticalTimelineElement } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant} from '../utils/motion';

const Experience = () => {
  return (
   <>
   <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>


   </>
  )
}

export default Experience