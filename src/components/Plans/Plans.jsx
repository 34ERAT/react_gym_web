import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import React from 'react'
import { plansData} from '../../data/plansData'
export default function Plans(){
  return (
    <div className="plans-container" >
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: "2rem" }}>
        <span className="stroke-text">YOUR JOURNEY</span>
        <span>READY TO START</span>
        <span className="stroke-text">WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> ${plan.price}</span>

            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more Benefits -&gt; </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
