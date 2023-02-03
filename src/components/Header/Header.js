import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchInput from "../../utility/SearchInput/SearchInput";
import { Link } from "react-router-dom";
import imageProfile from "../../image/profileLogo/1.png";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";

const Header = ({clickToOpenSide}) => {
  const profileInformation = JSON.parse(localStorage.getItem("profileDetail"));
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  const cartDetail = JSON.parse(localStorage.getItem("cartItem"));
  const clickAuthentication = () => {
    if (loginInformation === null) {
      toast.warn("Please First Log In!!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div id="headerExist" className="d-flex justify-content-between align-items-center">
      {width < 993 ? (
        <Col onClick={clickToOpenSide} id="hamburgerExist" style={{ padding: "0" }}>
          <i className="fa-solid fa-bars logo-sidebar fa-2xl"></i>
        </Col>
      ) : (
        <></>
      )}
      <div id="SearchHeaderExist">
        <SearchInput />
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <div className="text-light d-flex align-items-center" style={{ width: "12rem", margin: "0" }}>
            {loginInformation ? (
              <Link to="/profile" style={{ textDecoration: "none", color: "#ccc" }}>
                {profileInformation ? (
                  <span style={{ marginLeft: "6rem" }}>{profileInformation.user.firstname}</span>
                ) : (
                  loginInformation.user.email
                )}
              </Link>
            ) : (
              <div className="d-flex justify-content-around align-items-center">
                <Link to="/profile/login" style={{ marginRight: ".5rem" }}>
                  <button className="btn btn-outline-info button-sidebar">Log In</button>
                </Link>
                <Link to="/profile/signup" style={{ marginLeft: ".5rem" }}>
                  <button className="btn btn-outline-info button-sidebar">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
          <Link onClick={clickAuthentication} to={loginInformation === null ? "/" : "/profile"}>
            <img
              src={profileInformation ? profileInformation.user.image : imageProfile}
              style={{ border: "1.5px solid #fff" }}
              alt="profile img"
              width="40px"
              height="40px"
              className="style-profile-pic me-3 bg-light"
            />
          </Link>
        </div>
        <Link to="/notification">
          <i className="fa-solid fa-bell fa-xl ms-2 me-2 logo-sidebar" style={{ transform: "scale(1)" }}></i>
        </Link>
        <Link onClick={clickAuthentication} to={loginInformation === null ? "/" : "/cart"} style={{ position: "relative" }}>
          <i className="fa-solid fa-cart-shopping fa-xl ms-2 logo-sidebar" style={{ transform: "scale(1)" }}></i>
          {cartDetail ? <span className="num-cart-header">{cartDetail.length}</span> : <></>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
