import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Colaries from '../../assets/calories.png'
import { motion } from "framer-motion";

export default function Hero(){
  const transition = {type:'spring',duration:3};
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the besst ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile? "178px":"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness in the town</span>
        </div>
        {/*the besst ad*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help to shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate </span>
          <span>bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
        {/* calorile burnage */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Colaries} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
