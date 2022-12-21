import React, { createContext, useContext, useState } from "react";
import { auth } from "../../AppConfig/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface LoggedInContextValue {
  LoginState: boolean;
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
  getGoogleLoginAuth: Function;
}

// custom hook for using loggedin context
export function useLoggedInContext() {
  return useContext(LoggedInContext);
}

// setting up an initial context value
const LoggedInContext = createContext<LoggedInContextValue>({
  LoginState: false,
  setLoginState: () => {},
  getGoogleLoginAuth: () => {},
});

export const LoginContext: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const token = localStorage.getItem("authToken");

  //setting up the initial state for useState on the basis, whether we have
  // the authtoken in localstorage or not
  const initialState = token ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);

  const HandleGoogleLoginAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log('user credentials -> ',token,user);
      })
      .catch((error) => {
        console.log('auth error -> ',error);
      });
  };

  return (
    <LoggedInContext.Provider
      value={{
        LoginState: isLoggedIn,
        setLoginState: setIsLoggedIn,
        getGoogleLoginAuth: HandleGoogleLoginAuth,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};
