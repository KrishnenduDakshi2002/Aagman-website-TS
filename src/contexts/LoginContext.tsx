import React, { createContext, useContext, useState } from "react";

interface LoggedInContextValue {
  LoginState: boolean;
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
}

// custom hook for using loggedin context
export function useLoggedInContext() {
  return useContext(LoggedInContext);
}

// setting up an initial context value
const LoggedInContext = createContext<LoggedInContextValue>({
  LoginState: false,
  setLoginState: () => {},
});
export const LoginContext: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const token = localStorage.getItem("authToken");

  //setting up the initial state for useState on the basis, whether we have 
  // the authtoken in localstorage or not
  const initialState = token ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);
  return (
    <LoggedInContext.Provider
      value={{ LoginState: isLoggedIn, setLoginState: setIsLoggedIn }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};
