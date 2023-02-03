import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import "./AboutUs.css";
import { useDispatch } from "react-redux";
import autoSlideAction from "../../store/action/autoSlideAction";

const AboutUs = () => {
  const dispatch = useDispatch();
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
              <Col md={12} style={{ margin: "0 auto" }}>
                <Header  clickToOpenSide={clickToOpenSide}/>
                <div className="pt-5 center" style={{ height: "100vh" }}>
                  <div className="main-aboutUs">
                    <div className="col-one">
                      <p>FullName: Alireza Ebadi</p>
                      <p>Age: 19</p>
                      <p>City: tehran</p>
                      <p>level: junior</p>
                      <p>mobile Number: 09038320225</p>
                    </div>
                    <div className="col-two">
                      <h2>Skills: </h2>
                      <ul className="grid-style">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>FLEX</li>
                        <li>GRID</li>
                        <li>SASS</li>
                        <li>bootstrap</li>
                        <li>TAILWIND</li>
                        <li>JS(ES5-ES6-ES7-ES8)</li>
                        <li>UNIT TEST(JS)</li>
                        <li>REACT</li>
                        <li>REDUX</li>
                        <li>NEXT(Learning)</li>
                        <li>GIT</li>
                        <li>ENGLISH LANGUAGE(40%)</li>
                      </ul>
                    </div>
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
          <p className="me-5" style={{ margin: "0" }}>
            All right reserved 2022
            <i className="fa-solid fa-copyright"></i>
          </p>
        </Col>
        <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
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

export default AboutUs;
