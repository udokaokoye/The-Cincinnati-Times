import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";
import {useHistory} from 'react-router-dom'
import "./Auth.css";
const Auth = () => {
const history = useHistory();
const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [authStatus, setauthStatus] = useState("")
  const [fName, setfName] = useState("")
  const [lName, setlName] = useState("")
  const [uName, setuName] = useState("")
  const [email_sub, setemail_sub] = useState(true)
  const [passswordError, setpassswordError] = useState(false);

  const AuthnticateUser = () => {
      if (email == '') {
          alert("Please Enter A Valid Email");
          return;
      }
      const formData = new FormData;
      formData.append('email_username', email);

      if (authStatus == 'USER FOUND' || authStatus == 'AUTHENTICATION ERROR' || authStatus == 'USER NOT FOUND') {

        if (password.length > 6) {
            formData.append('password', password) 
            formData.append('u_password', password) 
            formData.append('u_email', email) 
            formData.append('ufname', fName) 
            formData.append('username', uName) 
            formData.append('ulname', lName) 
            formData.append('u_email_sub', email_sub ) 
        } else {
            alert("Password length must be greater than 6")
            return;
        }
      }

      fetch(`http://localhost/cincinnatitimes${authStatus !== 'USER NOT FOUND' ? '/auth/user_login.php' : '/register_user.php' }`, {
          method: "POST",
          body: formData
      }).then((res) => res.json()).then((data) => {
        //   alert(data);
          setauthStatus(data[0]);

          if (data[0] == 'AUTHENTICATED') {
            var tomorrow = new Date();
            tomorrow.setDate(new Date().getDate() + 1);
            setCookie("user", JSON.stringify(data), { path: "/auth", expires: tomorrow });
              history.push("/?auth=true")
          } else if (data[0] == 'AUTHENTICATION ERROR') {
              setpassswordError(true)
          }


      })
  }
  

  return (
    <div className="auth_container">
      <div className="auth_nav">
        <Link to={"/"} className="router_link">
          <h3>The Cincinnati Times</h3>
        </Link>
      </div>

      <div className="auth_wrapper">
        <div className="login_register">
          <p>Login or create an account</p>
          <small>Email Address</small>
          <input disabled={authStatus == 'USER FOUND' || authStatus == 'USER NOT FOUND' || authStatus == 'AUTHENTICATION ERROR'} onChange={(e) => setemail(e.target.value)} type="email" name="email" id="" />

          <div className="pss" style={{display: authStatus == '' ? 'none' : 'block'}}>
            <small>Password*</small>
            <i><span style={{color: 'red', fontSize: '12px', display: passswordError ? 'block' :'none'}}>Incorrect password, please try again</span></i>
            <input onChange={(e) => setpassword(e.target.value)} type="password" name="password" id="" />
          </div>

          <div className="new_user_form" style={{display: authStatus == 'USER NOT FOUND' ? 'block' : 'none'}}>
          <small>First Name*</small>
            <input onChange={(e) => setfName(e.target.value)} type="text" name="first name" id="" />

            <small>Last Name*</small>
            <input onChange={(e) => setlName(e.target.value)} type="text" name="last name" id="" />

            <small>Username*</small>
            <input onChange={(e) => setuName(e.target.value)} type="text" name="username" id="" />
          </div>

          <div style={{display: authStatus == 'USER NOT FOUND' ? 'block' : 'none'}} className="email_allow">
              <input type="checkbox" checked={email_sub} onChange={() => setemail_sub(!email_sub)} /> You agree to receive updates and offers from The Times. You may opt out anytime.
          </div>
          <button onClick={() => AuthnticateUser()} >{authStatus == 'USER FOUND' || authStatus == 'AUTHENTICATION ERROR'  ? 'Login' : authStatus == 'USER NOT FOUND' ? 'Sign UP' : 'Continue'}</button>

            <br />
          <i><a href="" style={{display: passswordError ? 'block' : 'none'}}>Forgot Password</a></i>
        </div>
        <small className="or_divider">or</small>

        <p className="pol_stat">
          By continuing, you agree to the Terms of Service and acknowledge our
          Privacy Policy.
        </p>

        <div className="social_login">
          <button className="sc_log google">Continue with Google</button>
          <button className="sc_log facebook"> Continue with Facebook</button>
          <button className="sc_log apple">Continue with Apple</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
