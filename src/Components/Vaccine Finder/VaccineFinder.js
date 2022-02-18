import React from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import "./VaccineFinder.css";
const VaccineFinder = ({mobile}) => {
  return (
    <div className="right_vaccine_finder">
      <h3 style={{color: mobile == 'true' ? 'purple' : 'initial', fontSize: mobile == 'true' ? 20 : 17}}>Vaccine {">>"} </h3>
      <LineBreaker />

      <p>Find Vaccine shots near you! Enter you zip code below</p>

      <center>
        <input
          type="text"
          className="zipcode_field"
          placeholder="Enter Zip Code"
        />
      </center>
      {/* <br /> */}
      <center>
        <button>SEARCH!</button>
      </center>
    </div>
  );
};

export default VaccineFinder;
