import React, { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import {HOST} from '../../../config/default';
import loginBackgroundImage from "../../assets/login-background.png";
import "./Login.css";
import { useLoggedInContext } from "../../contexts/LoginContext";
export const Login = () => {
  const {LoginState,setLoginState} = useLoggedInContext();
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const HandleSubmit = () => {
    const email = EmailRef.current?.value;
    const password = PasswordRef.current?.value;

    if(email == "" || password == "") return;

    fetch(`${HOST}/api/v1/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password : password
      }),
    })
    .then(res => res.json())
    .then(data => 
      {
        // if data consists of auth token key then pass
        if("authToken" in data && data.statusCode === 200){

          //set the authtoken to localstorage
          localStorage.setItem("authToken" ,data.authToken);

          //changing the login state 
          setLoginState(!LoginState);
          console.log('redirecting to login')

          // navigate back to previous page
          navigate(-1);
        }
        else{
          console.log(data);
        }
      });
  };
  return (
    <div className="loginPage__container">
      <div className="loginPage__image">
        <img src={loginBackgroundImage} />
      </div>
      <div className="loginPage__login_wrapper">
        <div className="loginPage__form">
          <label>Welcome to Aagman</label>
          <input
            ref={EmailRef}
            name="email"
            type={"email"}
            placeholder="Email"
          />
          <input
            ref={PasswordRef}
            name="password"
            type={"password"}
            placeholder="Password"
          />
          <button
            id="loginPage__login_btn"
            onClick={()=>{
              HandleSubmit();
            }}
          >
            Login
          </button>
          <button id="loginPage__gmail_btn">
            <SiGmail size={25} />
            <span>Sign in using Google</span>
          </button>
          <div>create account</div>
          <button id="loginPage__signin_btn"
          onClick={()=> navigate('/signup')}
          >Sign in</button>
        </div>
      </div>
    </div>
  );
};
