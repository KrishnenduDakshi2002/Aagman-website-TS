import React ,{useId, useState}from "react";
import "./searchBar.css";

// import { BsSearch } from "react-icons/Bs";
import {BiSearch} from 'react-icons/bi'
import { useHeaderSearchButtonContext, useHeaderSearchContext } from "../../contexts/headerSearch.context";

interface SearchBarProps {
  placeholder: string;
}
export const SearchBar = ({ placeholder }: SearchBarProps) => {
const [searchText, setSearchText] = useState("")
const inputId= useId();
const searchTextContext = useHeaderSearchContext();
const searchButtonContext = useHeaderSearchButtonContext();

  return (
    <div className="searchBar-container">
      <div className="searchBar-input-container">
        <input
          id={inputId}
          onInput = {e=> setSearchText((e.target as HTMLInputElement).value)}
          type="text"
          placeholder={placeholder}
          className="searchBar-input"
        />
      </div>
      <div className="searchBar-icon-btn-container">
        <button className="searchBar-icon-btn"
        onClick={() =>
        {
            searchTextContext.setState(searchText);
            
        }}
        >
          <BiSearch size={25} />
        </button>
      </div>
    </div>
  );
};
