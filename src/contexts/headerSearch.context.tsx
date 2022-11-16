import React, { createContext, useContext, useState } from "react";

interface ContextValue {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const SearchTextContext = createContext<ContextValue | null>(null);
const searchButtonContext = createContext({});
const HandleSearchButtonContext = createContext<Function | null>(null);

export function useHeaderSearchContext() {
  return useContext(SearchTextContext) as ContextValue;
}
export function useHeaderSearchButtonContext() {
  return useContext(searchButtonContext) as ContextValue;
}
export function useHandleSearchButtonContext() {
  return useContext(HandleSearchButtonContext) as Function;
}

const  HandleSearchFunction = (func: Function) => func;  // this will return the func which is set by any of those pages
// when the search button is clicked, that returned func will be called

export const HeaderSearchContext = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  return (
    <SearchTextContext.Provider
      value={{ state: searchQuery, setState: setSearchQuery }}
    >
      <searchButtonContext.Provider
        value={{ state: isSearched, setState: setIsSearched }}
      >
        <HandleSearchButtonContext.Provider value={HandleSearchFunction}>
          {children}
        </HandleSearchButtonContext.Provider>
      </searchButtonContext.Provider>
    </SearchTextContext.Provider>
  );
};
