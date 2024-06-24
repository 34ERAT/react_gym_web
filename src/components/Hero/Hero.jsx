import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Colaries from '../../assets/calories.png'
export default function Hero(){
  return(
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the besst ad*/}
        <div className="the-best-ad">
          <div></div>
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
              In here we will help to shape and build your ideal body 
              and live up your life to fullest
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
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart Rate </span>
          <span>bpm</span>
        </div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image"/>
        <img src={hero_image_back} alt="" className="hero-image-back"/>
        {/* calorile burnage */}
        <div className="calories">
          <img src={Colaries} alt=""/>
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
