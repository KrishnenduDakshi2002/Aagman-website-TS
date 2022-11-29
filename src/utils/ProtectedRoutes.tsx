import React,{useState,useEffect} from "react";
import { redirect, useNavigate } from "react-router-dom";
import { HOST } from "../../config/default";

interface Response{
    statusCode : number;
}
export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
    const [response, setResponse] = useState<Response>();
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");
  // if user is not logged in redirect him to login page
  useEffect(()=>{
    if (token) {
      fetch(`${HOST}/api/v1/user/verifyToken`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(token),
        },
      })
        .then((res) => res.json())
        .then((data) => {
        if(data.statusCode === 401 || data.statusCode === 400)
          {
            navigate('/login');
          }
          else{
            setResponse(data);
          }
        });
    }
    else{
        navigate('/login');
    }
  },[token])
  if(response?.statusCode===200){
    return children;
  }
  else{
    return <></>
  }
};
