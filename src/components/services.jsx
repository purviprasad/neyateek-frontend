import React, { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';


export const Services = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
    }
  };
  return (
    <React.Fragment>
      <VisibilitySensor onChange={onChange} partialVisibility>
        <div id="services" className="text-center">
          <div className="container">
            <div className={`section-title ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
              <h2>Our Services</h2>
              {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
            </div>
            <div className="row">
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className={i > 2 ? `col-xs-12 col-md-6 ${isVisible ? 'animate__animated animate__slideInUp' : ''}` : `col-xs-12 col-md-4 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    {" "}
                    <i className={d.icon}></i>
                    <div className={`service-desc ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                    {i === 2 && <br />}

                  </div>
                ))
                : "loading"}
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </React.Fragment>

  );
};
