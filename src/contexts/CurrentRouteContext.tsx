import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
interface CurrentRouteContextValue {
  currentRouteState: string;
  setCurrentRouteState: React.Dispatch<React.SetStateAction<string>>;
}

export function useCurrentRouteContext() {
  return useContext(CurrentRouteContext);
}

const CurrentRouteContext = createContext<CurrentRouteContextValue>({
  currentRouteState: "",
  setCurrentRouteState: () => {},
});

export const RouteContext: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const location = useLocation();
  const presentRoute = location.pathname.split("/")[1];
  const [currentRoute, setCurrentRoute] = useState(presentRoute);
  return (
    <CurrentRouteContext.Provider
      value={{
        currentRouteState: currentRoute,
        setCurrentRouteState: setCurrentRoute,
      }}
    >
      {children}
    </CurrentRouteContext.Provider>
  );
};
