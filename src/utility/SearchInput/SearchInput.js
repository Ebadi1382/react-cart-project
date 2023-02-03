import React from "react";
import "./SearchInput.css"

const SearchInput = () => {
  return (
    <form className="input-group">
      <span className="input-component p-2 pe-3"><i className="fa-solid fa-magnifying-glass input-component"></i></span>
      <input className="input-component input-search" type="text" placeholder="Search..." />
    </form>
  );
};

export default SearchInput;
