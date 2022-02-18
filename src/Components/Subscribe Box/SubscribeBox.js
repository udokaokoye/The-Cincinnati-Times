import React from "react";
import './SubscribeBox.css'
import LineBreaker from "../Line Breaker/LineBreaker";

const SubscribeBox = () => {
  return (
    <div className="right_bar_subscribe">
      <h3>Subscribe to Newsletter{" >>"} </h3>
      <LineBreaker />
      <p className="subscribe_intro">
        Get the best of The Cincinnati Times delivered to your inbox daily
      </p>

      <input
        type="email"
        className="right_bar_subscribe_input"
        placeholder="Enter email address"
      />
      <button className="right_bar_subscribe_btn">SUBSCRIBE</button>
    </div>
  );
};

export default SubscribeBox;
