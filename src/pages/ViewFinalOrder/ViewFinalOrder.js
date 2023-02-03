import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import autoSlideAction from "../../store/action/autoSlideAction";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import "./ViewFinalOrder.css";

const ViewFinalOrder = () => {
  const completeOrder = useSelector((state) => state.completeOrder);
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
                <div className="pt-5 cartExist">
                  {completeOrder.orderItems.map((item, index) => {
                    return (
                      <div
                        className="mt-4 d-flex justify-content-between main-viewFinal p-3 mb-5 final-product-exist"
                        key={index}
                      >
                        <img src={item.product.image} width="150px" height="200px" alt="order Imgae" />
                        <div>
                          <p style={{ fontSize: "1.5rem" }}>{item.product.brand}</p>
                          <p>{item.product.category}</p>
                          <p>price: {item.product.price}$</p>
                        </div>
                        <p>color: {item.product.color}</p>
                        <p>{item.product.rating}/5</p>
                      </div>
                    );
                  })}
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

export default ViewFinalOrder;
