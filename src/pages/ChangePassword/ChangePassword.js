import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import styles from "./ChangePassword.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import changePasswordProfileAction from "../../store/action/changePasswordProfileAction";
import { toast } from "react-toastify";
import autoSlideAction from "../../store/action/autoSlideAction";

const ChangePassword = () => {
  const [password, setPassword] = useState(false);
  const [passwordTwo, setPasswordTwo] = useState(false);
  const [passwordThree, setPasswordThree] = useState(false);
  const clickShowPassword = () => {
    setPassword(!password);
  };
  const clickTwoShowPassword = () => {
    setPasswordTwo(!passwordTwo);
  };
  const clickThreeShowPassword = () => {
    setPasswordThree(!passwordThree);
  };
  const changePasswordDetail = useSelector((store) => store.changePassword);
  const dispatch = useDispatch();
  const changePasswordProfile = (data, e) => {
    e.preventDefault();
    dispatch(changePasswordProfileAction(e.target.elements.OldpasswordProfile.value, e.target.elements.NewpasswordProfile.value));
    toast.info(`🦄 ${changePasswordDetail.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    e.target.elements.OldpasswordProfile.value = "";
    e.target.elements.NewpasswordProfile.value = "";
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required !!").min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
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
                <div className={`pt-5 ${styles.centerLoginPage}`} style={{ height: "100vh" }}>
                  <div className={styles.card}>
                    <form onSubmit={(e) => handleSubmit(changePasswordProfile)(e)}>
                      <div className={styles.field}>
                        <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                        </svg>
                        <input
                          id="OldpasswordProfile"
                          placeholder="Old Password"
                          className={styles.inputField}
                          name="password"
                          type={password ? "text" : "password"}
                          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                        />
                        <i onClick={clickShowPassword} className="fa-solid fa-eye logo-sidebar"></i>
                      </div>
                      <div className={styles.field}>
                        <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                        </svg>
                        <input
                          id="NewpasswordProfile"
                          placeholder="New Password"
                          className={styles.inputField}
                          name="password"
                          type={passwordTwo ? "text" : "password"}
                          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                          {...register("password")}
                        />
                        <i onClick={clickTwoShowPassword} className="fa-solid fa-eye logo-sidebar"></i>
                      </div>
                      <div className="text-danger">{errors.password?.message}</div>
                      <div className={styles.field}>
                        <svg className={styles.inputIcon} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                        </svg>
                        <input
                          id="logpass"
                          placeholder="Confirm New Password"
                          className={styles.inputField}
                          name="confirmPassword"
                          type={passwordThree ? "text" : "password"}
                          {...register("confirmPassword")}
                        />
                        <i onClick={clickThreeShowPassword} className="fa-solid fa-eye logo-sidebar"></i>
                      </div>
                      <div className="text-warning">{errors.confirmPassword?.message}</div>
                      <button className={styles.btn} type="submit">
                        Change Password
                      </button>
                    </form>
                    <h4 className="mt-5">{changePasswordDetail.message}</h4>
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

export default ChangePassword;
