import React, { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';
import RaffleraLogo from "../assets/rafflera-logo.png";
import PFTLogo from "../assets/pft-logo.png";
import './features.css'

export const Features = (props) => {
  const handleClick = (e) => {

  }
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
    }
  };
  return (
    <React.Fragment>
      <VisibilitySensor onChange={onChange} partialVisibility>
        <div id="features" className="text-center">
          <div className="container">
            <div className={`col-md-10 col-md-offset-1 section-title ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
              <h2>Our Products</h2>
            </div>
            <div className="row">
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className={`col-xs-12 col-md-6 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <a href={d.title === 'Rafflerra' ? 'https://rafflera.web.app/' : 'https://www.playfuturetraders.com/'} target='_blank' style={{ color: '#777' }}>
                      {" "}
                      {/* <i className={d.icon}></i> */}
                      <img className='feature-img' src={d.title === 'Rafflerra' ? RaffleraLogo : PFTLogo} alt="" />
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                      {i === 2 && <br />}
                    </a>
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </VisibilitySensor>

    </React.Fragment>

  );
};
