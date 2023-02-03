import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import styles from "./LogIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../../store/action/loginAction";
import { toast } from "react-toastify";
import autoSlideAction from "../../store/action/autoSlideAction";

const LogIn = () => {
  const [password, setPassword] = useState(false);
  const clickShowPassword = () => {
    setPassword(!password);
  };
  const dispatch = useDispatch();
  const logDetails = useSelector((state) => state.logIn);
  const navigate = useNavigate();
  const loginFormHandler = (e) => {
    e.preventDefault();
    const help = e.target.elements;
    dispatch(loginAction(help.emailLoging.value, help.passwordLogin.value));
    help.emailLoging.value = "";
    help.passwordLogin.value = "";
  };
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  if (logDetails.message === "logged in") {
    navigate("/");
  }
  if (loginInformation) {
    toast.success("🦄 Logged In", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  } else if (logDetails.message === "email or password is wrong") {
    toast.warn("email or password is wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  const clickToOpenSide = () => {
    dispatch(autoSlideAction());
  };
  return (
    <div className="main-page">
      <Container fluid>
        <Row>
          <SideMenu2 />
          <Col id="sideMenuExist" md={2} style={{ padding: "0" }}>
            <SideMenu />
          </Col>
          <Col id="main-homeExist" md={10} style={{ marginTop: "1.2rem" }}>
            <Container fluid>
              <Col md={11} style={{ margin: "0 auto" }}>
                <Header clickToOpenSide={clickToOpenSide} />
                <div className={`pt-5 ${styles.centerLoginPage}`}>
                  <div className={styles.card}>
                    <h4 className={styles.title}>Log In!</h4>
                    <form onSubmit={loginFormHandler}>
                      <div className={styles.field}>
                        <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
                        </svg>
                        <input
                          id="emailLoging"
                          placeholder="Email or userName"
                          className={styles.inputField}
                          name="logemail"
                          type="text"
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                        </svg>
                        <input
                          id="passwordLogin"
                          placeholder="Password"
                          className={styles.inputField}
                          name="logpass"
                          type={password ? "text" : "password"}
                          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                          required
                        />
                        <span onClick={clickShowPassword} style={{ color: "#d3d3d3", cursor: "pointer" }}>
                          <i className="fa-solid fa-eye logo-sidebar"></i>
                        </span>
                      </div>
                      <button className={styles.btn} type="submit">
                        Login
                      </button>
                      <Link to="/profile/signup" className={styles.btnLink}>
                        I Dont Have a Account !
                      </Link>
                      <p
                        className={loginInformation ? "text-success" : "text-danger"}
                        style={{ marginTop: "2rem", fontSize: "1.5rem" }}
                      >
                        {loginInformation ? (
                          <span>
                            <i className="fa-solid fa-face-smile logo-sidebar"></i>
                          </span>
                        ) : (
                          <span>
                            <i className="fa-solid fa-face-frown logo-sidebar"></i>
                          </span>
                        )}
                      </p>
                    </form>
                  </div>
                </div>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <img className="img-home-logo" src={homeLogo} alt="home logo" style={{ transform: "scale(1)" }} />
          </Link>
        </Col>
        <Col md={2} style={{ display: "flex", justifyContent: "center" }}>
          <p className="me-5" style={{ margin: "0", whiteSpace: "nowrap" }}>
            All right reserved 2022
            <i className="fa-solid fa-copyright"></i>
          </p>
        </Col>
        <Col id="footerExist" md={4} style={{ display: "flex", justifyContent: "center" }}>
          <div className="logo-social ms-5" style={{ width: "50%", margin: "0" }}>
            <i className="fa-brands fa-lg fa-twitter"></i>
            <i className="fa-brands fa-lg fa-instagram"></i>
            <i className="fa-brands fa-lg fa-telegram"></i>
            <i className="fa-brands fa-lg fa-whatsapp"></i>
            <i className="fa-brands fa-lg fa-facebook"></i>
            <i className="fa-brands fa-lg fa-pinterest"></i>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default LogIn;
