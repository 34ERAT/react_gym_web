import './Testimonial.css'
import React, {useState} from 'react'
import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from  '../../assets/rightArrow.png'
import {testimonialsData} from "../../data/testimonialsData.js"
import { motion } from 'framer-motion'
export default function Testimonial(){
  const transition = {type:'spring',duration:3}
  const [selected,setselected] =useState(0)
  const tlength = testimonialsData.length;
  return (
    <div className="Testimonial">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <motion.span
          key={selected}
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:100}}
          transition={transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setselected(tlength - 1)
                : setselected((prev) => prev - 1);
            }}
            src={LeftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tlength - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
