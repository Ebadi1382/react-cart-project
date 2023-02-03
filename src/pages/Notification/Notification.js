import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import "./Notification.css";
import { useDispatch } from "react-redux";
import autoSlideAction from "../../store/action/autoSlideAction";

const Notification = () => {
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
              <Col md={11} style={{ margin: "0 auto" }}>
                <Header clickToOpenSide={clickToOpenSide} />
                <div className="pt-5 d-flex flex-column justify-content-center align-items-center" style={{ height: "82vh" }}>
                  <p className="text-notif" style={{ width: "57%" }}>
                    There are currently no announcements
                  </p>
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

export default Notification;
