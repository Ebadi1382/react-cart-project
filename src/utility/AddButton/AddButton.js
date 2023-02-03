import React from "react";
import { Link } from "react-router-dom";
import "./AddButton.css";

const AddButton = ({ finished, link }) => {
  return (
    <Link to={`${link}`}>
      <button className={`btn btn-info btn-product-plus ${finished}`}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </Link>
  );
};

export default AddButton;
