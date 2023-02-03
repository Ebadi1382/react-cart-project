import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Header from "../../components/Header/Header";
import AddButton from "../../utility/AddButton/AddButton";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import "./ProductDetailSoon.css";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import imagesSwiper from "../../image/slideSwiper/slideSwiper";
import { useDispatch } from "react-redux";
import autoSlideAction from "../../store/action/autoSlideAction";

const ProductDetailSoon = () => {
  const { _id } = useParams();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const productDetailSoon = imagesSwiper.filter((item) => {
    return item._id === JSON.parse(_id) && item;
  });
  const dispatch = useDispatch();
  const clickToOpenSide = () => {
    dispatch(autoSlideAction());
  };
  return (
    <div>
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
                  <div className="pt-5">
                    <Container>
                      <Row>
                        <Col md={4}>
                          <Container>
                            <Row style={{ display: "flex", justifyContent: "center" }}>
                              <div
                                className="image-productDetail rounded"
                                style={{ width: "auto", height: "auto", padding: "1rem 1rem" }}
                              >
                                <Card style={{ width: "auto", height: "auto" }}>
                                  <Card.Img
                                    style={{ width: "auto", height: "auto" }}
                                    variant="top"
                                    src={productDetailSoon[0].url}
                                  />
                                </Card>
                              </div>
                            </Row>
                            <Row>
                              <div className="text-color-productDetail">
                                <p>Game Type :</p>
                                <div className="style-color-product">
                                  <div className="text-secondary">{productDetailSoon[0].type}</div>
                                </div>
                              </div>
                            </Row>
                            <Row style={{ backgroundColor: "#191919" }}>
                              <Col md={6}>
                                <div className="rating-productDetail">
                                  <h5>Rating</h5>
                                  <h3 className="text-secondary">? / 5</h3>
                                </div>
                              </Col>
                              <Col
                                md={6}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <h5 className="text-countInstock">Inventory</h5>
                                <p className="text-secondary" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                                  0
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                        <Col md={8}>
                          <Row>
                            <div className="text-center">
                              <div className="orginal-product mb-2">Orginal Product</div>
                              <div className="brand-productDetail mb-2">{productDetailSoon.brand}</div>
                              <div className="category-productDetail mb-2">{productDetailSoon.category}</div>
                              <div className="mb-2 mt-2">{productDetailSoon.name}</div>
                              <div className="style-price-btn mt-5 mb-5">
                                <p className="text-price">price:</p>
                                <div className="price-productDetail">?$</div>
                                <div>
                                  <button className="btn btn-info btn-productDetail btn-finished">
                                    Order Now
                                    <i className="fa-solid fa-cart-plus" style={{ color: "#fff" }}></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Row>
                          <Row>
                            <h2 className="text-center mt-5">Coming Soon</h2>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}></Col>
                        <Col>
                          <h3 className="text-center mt-5" style={{ color: "#9665d8" }}>
                            Other Game
                          </h3>
                          <div className="d-flex justify-content-center">
                            <div className=" d-flex justify-content-between">
                              <div ref={navigationPrevRef} className="me-3 arrow-div-swiper">
                                <i className="fa-solid fa-chevron-left fa-xl arrow-swiper"></i>
                              </div>
                              <div ref={navigationNextRef} className="arrow-div-swiper">
                                <i className="fa-solid fa-chevron-right fa-xl arrow-swiper"></i>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide-main mb-5">
                            <Swiper
                              breakpoints={{
                                // when window width is >= 640px
                                0: {
                                  slidesPerView: 1,
                                },
                                450: {
                                  // width: 640,
                                  slidesPerView: 2,
                                },
                                700: {
                                  // width: 768,
                                  slidesPerView: 3,
                                },
                                900: {
                                  // width: 768,
                                  slidesPerView: 4,
                                },
                                1175: {
                                  // width: 768,
                                  slidesPerView: 5,
                                },
                              }}
                              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                              spaceBetween={15}
                              slidesPerView={5}
                              navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                              }}
                              autoplay={{ delay: 2000, disableOnInteraction: false }}
                              pagination={{ clickable: true }}
                              scrollbar={{ draggable: true }}
                            >
                              <Swiper>
                                {imagesSwiper.map((item, index) => {
                                  return (
                                    <SwiperSlide key={index} style={{ padding: "1rem 0 3rem 0rem" }}>
                                      <Card
                                        style={{
                                          margin: "0",
                                          backgroundColor: "#28282a",
                                          border: "0",
                                          padding: "0 0 1rem 0",
                                          background: "#191919",
                                        }}
                                      >
                                        <Link to={`/products/productDetailSoon/${item._id}`}>
                                          <Card.Img variant="top" src={item.url} style={{ height: "18rem" }} />
                                        </Link>
                                        <Card.Body>
                                          <Card.Title style={{ color: "#64676c" }}>{item.category}</Card.Title>
                                          <Card.Text
                                            style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              color: "#fff",
                                            }}
                                          >
                                            {item.name}
                                            <AddButton link={`/products/productDetailSoon/${item._id}`} />
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                    </SwiperSlide>
                                  );
                                })}
                              </Swiper>
                            </Swiper>
                          </div>
                        </Col>
                      </Row>
                    </Container>
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
    </div>
  );
};

export default ProductDetailSoon;
