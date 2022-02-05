import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import "./NewsCategoryList.css";
const NewsCategoryList = () => {
  const demoarr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="categoryList_container">
      <div className="catg_list_bar">
        <div className="latest">
          <h4>Latest</h4>
        </div>
        <div className="search">
          <h4>
            <FontAwesomeIcon icon={faSearch} /> Search
          </h4>
        </div>
      </div>
      <LineBreaker />

      <div className="catg_list_wrapper">
        {demoarr.map((d) => (
          <React.Fragment>
            <div className="list_content">
              <div className="date">
                <p>Feb. 3, 2022</p>
              </div>
              <div className="content">
                <h3>
                  Air Force taps Clearview AI to research face-identifying
                  augmented reality glasses.
                </h3>
                <p>
                  In a flyer, Clearview said the product “saves lives,” “saves
                  time” and “improves health” by increasing social distancing
                  and keeping officers’ hands free to grab their weapons.
                </p>
                <small>by LEVI OKOYE</small>
              </div>
              <div className="media">
                <img
                  src={require("../../Assets/Demo/04econ-jolts-grid02-videoLarge.jpg")}
                  alt=""
                />
              </div>
            </div>
            <LineBreaker />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsCategoryList;
