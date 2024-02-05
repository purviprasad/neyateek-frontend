import React, { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';


export const About = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
    }
  };
  return (
    <React.Fragment>
      <VisibilitySensor onChange={onChange} partialVisibility>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-md-6 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                {" "}
                <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
              </div>
              <div className="col-xs-12 col-md-6">
                <div className={`about-text ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                  <h2>About Us</h2>
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                  <h3>Why Choose Us?</h3>
                  <div className="list-style">
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        {props.data
                          ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>

    </React.Fragment>

  );
};
