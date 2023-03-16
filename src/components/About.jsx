import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion'; 

import { styles } from '../styles';
import { services } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';



const ServiceCard =({ index, title, icon }) => {
  return(
    <p>{service.title}</p>
  )
}

const About = () => {
  return (
    <>
    
    <motion.div variants ={ textVariant()}>
      <p className={ styles.sectionSubText}>Introduction</p>
      <h2 className={ styles.sectionHeadText}>
        Overview.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px]"
      >
        I'm a goal oriented software developer with experience in Javascript,
        Typescript, Node.js, React.js, Express.js and Three.js.
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        { services.map((service, index)=>(
         < ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default About