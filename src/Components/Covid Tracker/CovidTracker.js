import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import './CovidTracker.css'
const CovidTracker = ({mobile}) => {
  return (
      <div className="covid_tracker">
        <div className="covid_tracker_bar" style={{color: mobile == 'true' ? 'purple' : 'initial', fontSize: mobile == 'true' ? 20 : 17}}>
          <h3 style={{fontSize: mobile == 'true' ? 20 : 17}}>Coronavirus in Cincinnati</h3>{" "}
          <FontAwesomeIcon style={{ marginLeft: 7 }} icon={faArrowRight} />
        </div>
        <LineBreaker />

        <div className="covid_tracker_content">
          <div className="covid_tracker_cases">
            <span className="">Cases</span>
            <span className="toll">15K</span>
            <span className="rate">+525%</span>
          </div>
          <div className="covid_tracker_deaths">
            <span className="">Deaths</span>
            <span className="toll">15K</span>
            <span className="rate">+525%</span>
          </div>

          <div className="covid_tracker_vaccine">
            <h3>Vaccines</h3>
            <div className="vaccine_toll">
              <p className="figure">73%</p>
              <div className="toll_color_code">
                <div className="ovrly_cnt"></div>
              </div>
            </div>
            <small>are fully vaccinated</small>

            <p className="find_shot">Find a vaccine shot near you {">>"}</p>
          </div>
        </div>
      </div>
  );
};

export default CovidTracker;
