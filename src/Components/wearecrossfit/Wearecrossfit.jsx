import React from "react";
import "./Wearecrossfit.css";
import { Link, BrowserRouter } from "react-router-dom";
const Wearecrossfit = () => {
  return (
  

      <div className="we-arecrossfit">

        <div className="left-wearecrossfit">

          <img
            src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681469894/weAreCrossFit_qnrluk.png"
            alt=""
          />
        </div>

        <div className="right-wearecrossfit">
          <p className="we-are-crossfit-paragraph">
            As crossFit, we are your one stop solution for your all health needs.
            We continuously thrive to serve you the best.
          </p>
          <p className="wearecrosfit-tagline">#BeHealthyBeHappy.</p>
          <div className="btn-con">
            {/* <BrowserRouter> */}
            <Link to='/review' className="wearecrossfit-btn1">Testimonials</Link>
            <Link to="/feedback" className="wearecrossfit-btn2">Feedback</Link>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>

  );
};

export default Wearecrossfit;
