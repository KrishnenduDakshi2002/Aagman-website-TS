import React, { useId, useState } from "react";
import "./searchBar.css";

// import { BsSearch } from "react-icons/Bs";
import { BiSearch } from "react-icons/bi";
import {
  useHeaderSearchButtonContext,
  useHeaderSearchContext,
} from "../../contexts/headerSearch.context";

interface SearchBarProps {
  placeholder: string;
  onChange: (val: string) => void;
}
export const SearchBar = ({ placeholder, onChange }: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");
  const inputId = useId();
  const searchTextContext = useHeaderSearchContext();

  return (
    <div className="searchBar-container">
      <div className="searchBar-input-container">
        <input
          id={inputId}
          onInput={(e) => {
            const s = (e.target as HTMLInputElement).value;
            setSearchText(s);
            onChange(s);
          }}
          type="text"
          placeholder={placeholder}
          className="searchBar-input"
        />
      </div>
      <div className="searchBar-icon-btn-container">
        <button
          className="searchBar-icon-btn"
          onClick={() => onChange(searchText)}
        >
          <BiSearch size={25} />
        </button>
      </div>
    </div>
  );
};
