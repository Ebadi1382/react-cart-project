import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import styles from "./SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import signupAction from "../../store/action/signupAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import autoSlideAction from "../../store/action/autoSlideAction";

const SignUp = () => {
  const [passwordOne, setPasswordOne] = useState(false);
  const [passwordTwo, setPasswordTwo] = useState(false);
  const clickOneShowPassword = () => {
    setPasswordOne(!passwordOne);
  };
  const clickTwoShowPassword = () => {
    setPasswordTwo(!passwordTwo);
  };
  const dispatch = useDispatch();
  const signAccount = useSelector((store) => store.signUp);
  useEffect(() => {
    toast.info("Please follow the rules!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }, []);
  const signFormHandler = (data, e) => {
    e.preventDefault();
    const help = e.target.elements;
    dispatch(
      signupAction(help.usernameSignUp.value, help.emailSignUp.value, help.passwordSignUp.value, help.mobileNumberSingUp.value)
    );
    help.usernameSignUp.value = "";
    help.emailSignUp.value = "";
    help.passwordSignUp.value = "";
    help.mobileNumberSingUp.value = "";
  };
  if (signAccount.length !== 0) {
    toast.info(`🦄 ${signAccount}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required !!").min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const navigate = useNavigate();
  if (signAccount === "user was created") {
    navigate("/profile/login");
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
                <Row>
                  <Header clickToOpenSide={clickToOpenSide} />
                </Row>
                <Row style={{ marginTop: "4rem", textAlign: "justify" }}>
                  <p className={`text-secondary ${styles.textWarn}`}>
                    <span className={styles.warn}>
                      <i className="fa-solid fa-triangle-exclamation logo-sidebar"></i>{" "}
                    </span>
                    Email must have @ and gmail.com or yahoo.com
                  </p>
                  <p className={`text-secondary ${styles.textWarn}`}>
                    <span className={styles.warn}>
                      <i className="fa-solid fa-triangle-exclamation logo-sidebar"></i>{" "}
                    </span>
                    The password must contain at least eight characters, at least one uppercase letter, one special character
                    (#/_-...) , one lowercase letter and one number
                  </p>
                  <p className={`text-secondary ${styles.textWarn}`}>
                    <span className={styles.warn}>
                      <i className="fa-solid fa-triangle-exclamation logo-sidebar"></i>{" "}
                    </span>
                    The password must contain at least eight characters, at least Mobile number should contain 11 characters and
                    proper format
                  </p>
                </Row>
                <Row style={{ marginTop: "2rem", textAlign: "center", fontSize: "2rem", color: "#ffeba7" }}>
                  <p>
                    {signAccount.length === 0 ? (
                      <span>
                        <i className="fa-solid fa-face-meh"></i>
                      </span>
                    ) : signAccount === "user was created" ? (
                      <span>
                        {signAccount} <i className="fa-solid fa-face-smile"></i>
                      </span>
                    ) : (
                      <span>
                        {signAccount} <i className="fa-solid fa-face-frown"></i>
                      </span>
                    )}
                  </p>
                </Row>
                <Row>
                  <div className={`pt-5 ${styles.centerLoginPage} mb-5`}>
                    <div className={styles.card}>
                      <h4 className={styles.title}>Sing Up!</h4>
                      <form onSubmit={(e) => handleSubmit(signFormHandler)(e)}>
                        <div className={styles.field}>
                          <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                          </svg>
                          <input
                            id="usernameSignUp"
                            placeholder="UserName"
                            className={styles.inputField}
                            name="logemail"
                            type="text"
                            required
                          />
                        </div>
                        <div className={styles.field}>
                          <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"></path>
                          </svg>
                          <input
                            id="emailSignUp"
                            placeholder="Email"
                            className={styles.inputField}
                            name="logemail"
                            type="email"
                            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                            required
                          />
                        </div>
                        <div className={styles.field}>
                          <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                          </svg>
                          <input
                            id="passwordSignUp"
                            placeholder="Password"
                            className={styles.inputField}
                            name="password"
                            type={passwordOne ? "text" : "password"}
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                            {...register("password")}
                          />
                          <span onClick={clickOneShowPassword} style={{ color: "#d3d3d3", cursor: "pointer" }}>
                            <i className="fa-solid fa-eye logo-sidebar"></i>
                          </span>
                        </div>
                        <div className="text-danger">{errors.password?.message}</div>
                        <div className={styles.field}>
                          <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                          </svg>
                          <input
                            id="logpass"
                            placeholder="Confirm Password"
                            className={styles.inputField}
                            name="confirmPassword"
                            type={passwordTwo ? "text" : "password"}
                            {...register("confirmPassword")}
                          />
                          <span onClick={clickTwoShowPassword} style={{ color: "#d3d3d3", cursor: "pointer" }}>
                            <i className="fa-solid fa-eye logo-sidebar"></i>
                          </span>
                        </div>
                        <div className="text-warning">{errors.confirmPassword?.message}</div>
                        <div className={styles.field}>
                          <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                          </svg>
                          <input
                            id="mobileNumberSingUp"
                            placeholder="Mobile Number"
                            className={styles.inputField}
                            type="number"
                            pattern="(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}"
                            required
                          />
                        </div>
                        <button className={styles.btn} type="submit">
                          Sign Up
                        </button>
                        <Link to="/profile/login" className={styles.btnLink}>
                          I have a Account
                        </Link>
                      </form>
                    </div>
                  </div>
                </Row>
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

export default SignUp;
