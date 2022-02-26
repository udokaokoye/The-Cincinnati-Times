import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import LineBreaker from "../Line Breaker/LineBreaker";
import "./NewsCategoryList.css";
const NewsCategoryList = () => {
  const demoarr = [1, 2, 3, 4, 5, 6, 7];
  const searchArray = [];
  const [searchbar, setsearchbar] = useState(false)
  const [searchKeyword, setsearchKeyword] = useState('')
  return (
    <div className="categoryList_container">
      <div className="catg_list_bar">
        <div onClick={() => setsearchbar(false)} className="latest">
          <h4>Latest</h4>
        </div>
        <div onClick={() => setsearchbar(true)} className="search">
          <input onChange={(txt) => setsearchKeyword(txt.target.value)} style={{display: searchbar ? 'block' : 'none'}} type="text" placeholder="Search..." />
          <h4 style={{color: searchbar ? 'black' : '#918f8f'}}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </h4>
        </div>
      </div>
      <LineBreaker />

      <div style={{display: searchbar ? 'none' : 'block'}} className="catg_list_wrapper">
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

      <div style={{display: searchbar ? 'block' : 'none'}} className="catg_list_wrapper search_result">
        {searchArray.length > 0 ? searchArray.map((d) => (
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
        )) : (<h3>Start Searching... ({searchKeyword})</h3>)}
      </div>
    </div>
  );
};

export default NewsCategoryList;
