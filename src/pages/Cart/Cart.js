import React from "react";
import { Button, Col, Container, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeProudctAction } from "../../store/action/cartAction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "./Cart.css";
import autoSlideAction from "../../store/action/autoSlideAction";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cartDetail);
  const completeOrder = useSelector((state) => state.completeOrder);
  const cartItemLocal = JSON.parse(localStorage.getItem("cartItem"));
  const deleteProductHandler = (id) => {
    dispatch(removeProudctAction(id));
    Swal.fire({
      title: "Delete Product",
      text: "The desired product has been removed",
      icon: "error",
      confirmButtonText: "OK",
    });
  };
  const qtyPrice = cartItemLocal
    ? cartItem.map((item) => {
        return item[1].qty * item[0].price;
      })
    : "";
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
                <div
                  className="pt-5 cartExist"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Col md={8}>
                      <Row
                        id="cart-center-totalPrice"
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                      >
                        <Col md={cartItemLocal.length === 0 ? 12 : 8}>
                          <div className={cartItemLocal.length === 0 ? "text-center" : ""}>
                            <div className="style-text-products text-product-exist">
                              <div className="text">
                                <div className="wrapper">
                                  <div id="L" className="letter">
                                    C
                                  </div>
                                  <div className="shadow">C</div>
                                </div>
                                <div className="wrapper">
                                  <div id="I" className="letter">
                                    A
                                  </div>
                                  <div className="shadow">A</div>
                                </div>
                                <div className="wrapper">
                                  <div id="G" className="letter">
                                    R
                                  </div>
                                  <div className="shadow">R</div>
                                </div>
                                <div className="wrapper">
                                  <div id="H" className="letter">
                                    T
                                  </div>
                                  <div className="shadow">T</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        {cartItemLocal.length > 0 ? (
                          <Col>
                            <p style={{ margin: "0", whiteSpace: "nowrap" }}>
                              Total Price :{" "}
                              {qtyPrice.reduce((prev, last) => {
                                const floorNum = prev + last;
                                const newNum = floorNum.toFixed(2);
                                localStorage.setItem("totalPrice", JSON.stringify(newNum));
                                return JSON.parse(newNum);
                              })}
                              $
                            </p>
                          </Col>
                        ) : (
                          <></>
                        )}
                      </Row>
                      {cartItemLocal.length === 0 ? (
                        <h2 className="text-center text-secondary mt-5">The shopping cart is empty</h2>
                      ) : (
                        <ListGroup variant="flush">
                          {cartItemLocal ? (
                            cartItem.map((item, index) => {
                              return (
                                <ListGroupItem key={index} style={{ backgroundColor: "#212123" }}>
                                  <Row
                                    className="cart-all-product-exist"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      borderRadius: "10px",
                                      backgroundColor: "#191919",
                                      color: "#fff",
                                      padding: "1rem",
                                      margin: ".5rem 0",
                                    }}
                                  >
                                    <Col md={2}>
                                      <Image id="cart-image-Exist" src={item[0].image} alt={item[0].name} fluid rounded />
                                    </Col>
                                    <Col className="cart-all-product-exist" md={3}>
                                      {item[0].name}
                                    </Col>
                                    <Col className="cart-all-product-exist" md={2}>
                                      {item[0].price}$
                                    </Col>
                                    <Col className="cart-all-product-exist" md={2}>
                                      X{item[1].qty}
                                    </Col>
                                    <Col className="cart-all-product-exist">
                                      <Button type="button" variant="danger" onClick={() => deleteProductHandler(item[0]._id)}>
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </Col>
                                  </Row>
                                </ListGroupItem>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </ListGroup>
                      )}
                    </Col>
                    {cartItemLocal.length === 0 && completeOrder.orderItems ? (
                      <button className="btn btn-info mt-5">
                        <Link style={{ color: "#fff", textDecoration: "none" }} to="/cart/complete_data/final_veiw">
                          View the purchased product{" "}
                        </Link>
                      </button>
                    ) : (
                      <></>
                    )}
                  </Row>
                  {cartItemLocal.length > 0 ? (
                    <Link to="/cart/complete_data">
                      <button className="btn btn-outline-info mt-5 mb-5 p-3">Order Now</button>
                    </Link>
                  ) : (
                    <></>
                  )}
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

export default Cart;
