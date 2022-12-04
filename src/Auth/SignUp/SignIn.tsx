import React, { useRef, useState, useEffect } from "react";
import "./SignIn.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import image from "../../assets/login-background.png";
import axios from "axios";
import { HOST } from "../../../config/default";
import { SiJekyll } from "react-icons/si";
import { async } from "@firebase/util";
import { useLoggedInContext } from "../../contexts/LoginContext";
export const SignUp = () => {
  const {LoginState,setLoginState} = useLoggedInContext();
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const HandleSignUp = async() => {
    const response = await useSignUp(
      emailRef.current!.value,
      passwordRef.current!.value,
      userNameRef.current!.value
    );
    if( 'statusCode' in response && response.statusCode == 201){
      alert('Signed up');

      const loginRes = await useLogin(emailRef.current!.value,passwordRef.current!.value)
      if('statusCode' in loginRes && 'authToken' in loginRes  && loginRes.statusCode == 200){
        //set the authtoken to localstorage
        localStorage.setItem("authToken" ,loginRes.authToken);

        //changing the login state 
        setLoginState(!LoginState);
        // navigate to events page
        navigate('/');
      }
      else{
        alert('Error in logged in');
      }
    }
    else if('error' in response && 'statusCode' in response  && (response.statusCode == 400 || response.statusCode == 500) ){
      alert('Error while sign up');
    } 
  };

  return (
    <div className="signup__wrapper">
      <div className="sigup__container">
        <div>
          <img src={image} />
        </div>
        <div>
          <div className="signup__form">
            <p>Welcome to Aagman</p>
            
            <div className="signup__input">
              <label>Email</label>
              <input ref={emailRef} type="email" placeholder="Enter email" />
            </div>
            <div className="signup__input">
              <label>Password</label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div className="signup__input">
              <label>Username</label>
              <input
                ref={userNameRef}
                type="text"
                placeholder="Enter username"
              />
            </div>
            <button onClick={HandleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const useSignUp = async(email: string, password: string, userName: string) => {
    let response:any = {};
    await axios({
      method: "post",
      url: `${HOST}/api/v1/user/signup`,
      data: {
        email: email,
        password: password,
        userName: userName,
      },
    }).then((res) => {
      response = res.data;
    });
  return response;
};

const useLogin = async(email:string,password: string)=>{
   let response: any = {};
   await axios({
    method : 'post',
    url : `${HOST}/api/v1/user/login`,
    data :{
      email : email,
      password : password
    }
   }).then(res => {
      response = res.data;
   });
  return response;
}