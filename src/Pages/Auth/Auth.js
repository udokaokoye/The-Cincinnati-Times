import React from "react";
import { Link } from "react-router-dom";
import './Auth.css'
const Auth = () => {
  return <div className="auth_container">
      <div className="auth_nav">
          <Link to={'/'} className="router_link"><h3>The Cincinnati Times</h3></Link>
      </div>

      <div className="auth_wrapper">
            <div className="login_register">
                <p>Login or create an account</p>
                <small>Email Address</small>
                <input type="email" name="email" id="" />
                <button>Continue</button>
            </div>
            <small className="or_divider">or</small>

            <p className="pol_stat">By continuing, you agree to the Terms of Service and acknowledge our Privacy Policy.</p>

            <div className="social_login">
                <button className="sc_log google">Continue with Google</button>
                <button className="sc_log facebook"> Continue with Facebook</button>
                <button className="sc_log apple">Continue with Apple</button>
            </div>
      </div>
  </div>;
};

export default Auth;
