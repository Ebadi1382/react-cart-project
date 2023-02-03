import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2";
import autoSlideAction from "../../store/action/autoSlideAction";
import "./SlideMenu2.css";

const SideMenu = () => {
  const loginExist = JSON.parse(localStorage.getItem("loginDetail"));
  const [hide, setHide] = useState(false);
  const clickToHide = () => {
    setHide(!hide);
  };
  const clickAuthentication = () => {
    if (loginExist === null) {
      toast.warn("Please First Log In!!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };
  const clickToHelp = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "do you need help?",
      text: "If you need help, call 09038320225",
      icon: "question",
      confirmButtonText: "OK",
    });
  };
  const clickToTalk = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you have any criticism?",
      text: "If you have any criticism, call 09038320225",
      icon: "question",
      confirmButtonText: "OK",
    });
  };
  const side = useSelector((store) => store.autoSlide);
  const dispatch = useDispatch();
  const clickToOpenSide = () => {
    dispatch(autoSlideAction());
  };
  const clickClose = () => {
    dispatch(autoSlideAction());
  };
  return (
    <div onClick={clickClose} className={`main-side-menu2 ${side ? "show" : "hidden"}`}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          onClick={clickToOpenSide}
          style={{ padding: "0", marginTop: "3rem", transform: "scale(1.4)", display: "inline-block" }}
        >
          <i className="fa-solid fa-bars logo-sidebar fa-2xl"></i>
        </div>
        <div className="mt-5">
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <button className="btn btn-outline-info button-sidebar">
              <i className="fa-solid fa-house fa-xl"></i>
            </button>
          </Link>
        </div>
        <div className="main-link-sideBar">
          <div className="part-one-side-menu-links">
            <i className="fa-solid fa-user logo-sidebar"></i>
            <Link onClick={clickAuthentication} className="link-side-menu" to={loginExist === null ? "/" : "/profile"}>
              Profile
            </Link>
          </div>
          <div className="part-two-side-menu-links">
            <i className="fa-solid fa-magnifying-glass logo-sidebar"></i>
            <Link className="link-side-menu" to="/Search">
              Search
            </Link>
          </div>
          <div className="part-three-side-menu-links">
            <i className="fa-solid fa-bag-shopping logo-sidebar"></i>
            <Link className="link-side-menu" to="/products">
              Proudcts
            </Link>
          </div>
          <div className="part-four-side-menu-links">
            <i className="fa-solid fa-cart-shopping logo-sidebar"></i>
            <Link onClick={clickAuthentication} className="link-side-menu" to={loginExist === null ? "/" : "/cart"}>
              Cart
            </Link>
          </div>
        </div>
        <div className="link-category">
          <div className="main-link-sidebar pt-5">
            <h6 onClick={clickToHide} style={{ cursor: "pointer", marginBottom: "0" }}>
              CATEGORY
            </h6>
            <i
              onClick={clickToHide}
              style={{ cursor: "pointer" }}
              className={`fa-solid fa-chevron-down ${hide ? "up" : "down"}`}
            ></i>
          </div>
          <div className={`main-link-sideBar ${hide ? "hide" : "unHide"}`}>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-computer-mouse logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                Mouse
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-headphones logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                HeadPhone
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-gamepad logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                Console
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-vr-cardboard logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                VrGlasses
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-regular fa-keyboard logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                KeyBoard
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-computer logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                Computer
              </Link>
            </div>
            <div className="part-one-side-menu-links">
              <i className="fa-solid fa-microphone logo-sidebar"></i>
              <Link className="link-side-menu" to="/products">
                Microphone
              </Link>
            </div>
          </div>
        </div>
        <div className="logo-social">
          <a style={{ color: "#64676c" }} href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-twitter"></i>
          </a>
          <a style={{ color: "#64676c" }} href="https://www.instagram.com/alireza.ebadi__" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-instagram"></i>
          </a>
          <a style={{ color: "#64676c" }} href="https://telegram.org" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-telegram"></i>
          </a>
          <a style={{ color: "#64676c" }} href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-whatsapp"></i>
          </a>
          <a style={{ color: "#64676c" }} href="https://fa-ir.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-facebook"></i>
          </a>
          <a style={{ color: "#64676c" }} href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-lg fa-pinterest"></i>
          </a>
        </div>
        <div className="main-link-sideBar end">
          <div className="part-one-side-menu-links">
            <i className="fa-solid fa-headset logo-sidebar"></i>
            <Link onClick={clickToHelp} className="link-side-menu" to="/">
              Help
            </Link>
          </div>
          <div className="part-one-side-menu-links">
            <i className="fa-solid fa-circle-info logo-sidebar"></i>
            <Link onClick={clickToTalk} className="link-side-menu" to="/">
              Critics
            </Link>
          </div>
          <div className="part-one-side-menu-links">
            <i className="fa-solid fa-bell logo-sidebar"></i>
            <Link className="link-side-menu" to="/notification">
              Notifications
            </Link>
          </div>
          <div className="part-one-side-menu-links">
            <i className="fa-regular fa-face-smile logo-sidebar"></i>
            <Link className="link-side-menu" to="/about_us">
              About US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
