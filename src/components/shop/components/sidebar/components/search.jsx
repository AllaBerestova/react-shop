import React, { useState } from "react";

export const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search"
          className="input search-row"
          value={searchValue}
          onChange={changeSearch}
        />
        <img src="./images/iconSearch.svg" alt="Search" className="search-icon" />
      </label>
    </div>
  );
};
