import React, { useState, useEffect } from "react";
import LinksNav from "../LinksNav/LinksNav";
import "./HeaderNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCloudRain,
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HotTopics from "../Hot Topics/HotTopics";
import { Link } from "react-router-dom";
import SideNav from "../Side Nav/SideNav";

const HeaderNav = () => {
  const [sideToggle, setsideToggle] = useState(false);

  function disableScroll() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
  function enableScroll() {
    window.onscroll = function () {};
  }

//   useEffect(() => {
//     if (sideToggle) {
//         document.getElementById("container").style.display = 'none'
//     } else if (!sideToggle) {
//         document.getElementById("container").style.display = 'block'
//     }
// }, [sideToggle])
  const toggleNav = () => {
    setsideToggle(!sideToggle);
  };
  return (
    <section className="header">
      <LinksNav />
      <section className="sub_header">
        <div className="left">
          <p>Wednesday, December 22, 2021</p>
          <div
            style={{ display: sideToggle ? "none" : "block" }}
            className="menu_bar"
            onClick={() => {
              toggleNav();
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="center">
          <Link to={"/"} className="router_link">
            <h1>The Cincinnati Times</h1>
          </Link>
        </div>
        <div className="right">
          <span>
            <FontAwesomeIcon icon={faCloudRain} className="weather_icn" /> 32°F
          </span>
          <Link to={"/auth"} className='router_link'>
          <div
            style={{ display: sideToggle ? "none" : "block" }}
            className="mobile_aut_btn"
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          </Link>
          <div
            onClick={() => {
              toggleNav();
            }}
            style={{ display: sideToggle ? "block" : "none" }}
            className="close_nav"
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </section>
      <div className="sas">
        <div className="mobile_date_weather_login">
          <div className="mobile_info_wrapper">
            <span className="date">Wednesday, December 22, 2021</span>
            <span className="weather">45°F</span>
            <span className="login">LOG IN</span>
          </div>
        </div>
        <div
          className="side_nav"
          style={{ display: sideToggle ? "block" : "none" }}
        >
          <SideNav setsideToggle={setsideToggle} />
        </div>
      </div>

      <HotTopics />
    </section>
  );
};

export default HeaderNav;
