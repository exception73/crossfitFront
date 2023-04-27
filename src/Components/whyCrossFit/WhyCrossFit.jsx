import React from "react";
import data from "./data";

import "./WhyCrossFit.css";
import FeatureCard from "../FeatureCard/FeatureCard";
const WhyCrossFit = () => {
  return (
    <div className="why-crossfit">
      <div className="whiteline"></div>

      <div className="upper-desc">
        <div className="why-crossfit1">
          WHY <span className="crossfit-in-purple">crossFit?</span>
        </div>
        <div>
          <p className="desc-why">Your Personal Health Coach</p>
          <p className="desc-why">in Your Pocket!!</p>
        </div>
      </div>


        <div className="lower-cards">
           { data.map(item => (
                
                <FeatureCard  card={item} />
               
            ))}
        </div>
      
    </div>
  );
};

export default WhyCrossFit;
