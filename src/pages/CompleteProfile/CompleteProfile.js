import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import styles from "./CompleteProfile.module.css";
import { useDispatch } from "react-redux";
import completeProfileAction from "../../store/action/completeProfileAction";
import autoSlideAction from "../../store/action/autoSlideAction";

const CompleteProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const completeProfileHandler = (e) => {
    e.preventDefault();
    const help = e.target.elements;
    dispatch(
      completeProfileAction(help.firstName.value, help.lastName.value, help.age.value, help.gender.value, help.city.value)
    );
    navigate("/profile");
  };
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
                <div className="pt-5 d-flex flex-column justify-content-center align-items-center">
                  <form onSubmit={completeProfileHandler} className={styles.mainform}>
                    <div className={styles.inputGroup}>
                      <input id="firstName" required type="text" name="text" className={styles.input} />
                      <label className={styles.userLabel}>First Name</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input id="lastName" required type="text" name="text" className={styles.input} />
                      <label className={styles.userLabel}>Last Name</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input id="age" required type="number" name="text" className={styles.input} />
                      <label className={styles.userLabel}>Age</label>
                    </div>
                    <div className="d-flex justify-content-between py-4 w-50">
                      <label>Gender:</label>
                      <select id="gender" name="text" className={styles.select}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <input id="city" required type="text" name="text" className={styles.input} />
                      <label className={styles.userLabel}>City</label>
                    </div>
                    <button className="btn btn-outline-secondary p-3 mt-3 mb-5" style={{ margin: "0 auto" }}>
                      add/edit
                    </button>
                  </form>
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

export default CompleteProfile;
