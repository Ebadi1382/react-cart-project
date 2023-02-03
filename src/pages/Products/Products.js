import React, { useEffect, useRef } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import "./Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import imagesSwiper from "../../image/slideSwiper/slideSwiper";
import AddButton from "../../utility/AddButton/AddButton";
import { useDispatch, useSelector } from "react-redux";
import ProductAction from "../../store/action/productAction";
import slideImage from "../../image/slideImage/slideImage";
import slideAction from "../../store/action/slideAction";
import { Link } from "react-router-dom";
import autoSlideAction from "../../store/action/autoSlideAction";

const Products = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.products);
  const slideProduct = useSelector((store) => store.slideProduct);
  useEffect(() => {
    dispatch(ProductAction());
  }, [dispatch]);
  const handleSelect = (selectedIndex, e) => {
    dispatch(slideAction(selectedIndex));
  };
  const clickToOpenSide = () => {
    dispatch(autoSlideAction());
  };
  return (
    <div>
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
                  <div className="style-text-products">
                    <div className="text">
                      <div className="wrapper">
                        <div id="L" className="letter">
                          P
                        </div>
                        <div className="shadow">P</div>
                      </div>
                      <div className="wrapper">
                        <div id="I" className="letter">
                          R
                        </div>
                        <div className="shadow">R</div>
                      </div>
                      <div className="wrapper">
                        <div id="G" className="letter">
                          O
                        </div>
                        <div className="shadow">O</div>
                      </div>
                      <div className="wrapper">
                        <div id="H" className="letter">
                          D
                        </div>
                        <div className="shadow">D</div>
                      </div>
                      <div className="wrapper">
                        <div id="T" className="letter">
                          U
                        </div>
                        <div className="shadow">U</div>
                      </div>
                      <div className="wrapper">
                        <div id="N" className="letter">
                          C
                        </div>
                        <div className="shadow">C</div>
                      </div>
                      <div className="wrapper">
                        <div id="E" className="letter">
                          T
                        </div>
                        <div className="shadow">T</div>
                      </div>
                      <div className="wrapper">
                        <div id="S" className="letter">
                          S
                        </div>
                        <div className="shadow">S</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="type-product mt-5 mb-5">
                      <h5 style={{ marginRight: "2rem", marginTop: ".4rem" }}>Coming Soon</h5>
                      <div className="productBtnExist">
                        <button className="btn btn-secondary btn-type-product">Top</button>
                        <button className="btn btn-secondary btn-type-product">Popular</button>
                        <button className="btn btn-secondary btn-type-product" style={{ textDecoration: "line-through 2px red" }}>
                          Off%
                        </button>
                      </div>
                    </div>
                    <div className="me-3 d-flex justify-content-between">
                      <div ref={navigationPrevRef} className="me-3 arrow-div-swiper">
                        <i className="fa-solid fa-chevron-left fa-xl arrow-swiper"></i>
                      </div>
                      <div ref={navigationNextRef} className="arrow-div-swiper">
                        <i className="fa-solid fa-chevron-right fa-xl arrow-swiper"></i>
                      </div>
                    </div>
                    <p style={{ color: "#64676c", marginBottom: "0", display: "flex", alignItems: "center" }}>Categorys</p>
                  </div>
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
                    style={{ marginBottom: "6rem" }}
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
                  <div className="type-product mt-5">
                    <h5 className="center-products-exist" style={{ marginRight: "2rem", marginTop: ".4rem" }}>
                      Popular Products
                    </h5>
                    <div className="productBtnExist">
                      <button className="btn btn-secondary btn-type-product">Top</button>
                      <button className="btn btn-secondary btn-type-product">Popular</button>
                      <button className="btn btn-secondary btn-type-product" style={{ textDecoration: "line-through 2px red" }}>
                        Off%
                      </button>
                    </div>
                  </div>
                  <div className="all-product m">
                    {loading ? (
                      <div className="spinner-border p-4 mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <div className="products mt-5">
                        {error ? (
                          <p>{products}</p>
                        ) : (
                          products.map((item) => {
                            return (
                              <div key={item._id} className="product-detail">
                                <Card style={{ margin: "0", backgroundColor: "#28282a", border: "0" }}>
                                  <Link to={`/products/productDetail/${item._id}`}>
                                    <Card.Img variant="top" src={item.image} style={{ height: "20rem" }} />
                                  </Link>
                                  <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Card.Title style={{ color: "#fff" }}>{item.brand}</Card.Title>
                                    <Card.Title style={{ color: "#64676c", fontWeight: "400", fontSize: "1rem" }}>
                                      category :{item.category}
                                    </Card.Title>
                                    <Card.Title style={{ color: "#8b50c8", fontSize: "1.1rem" }}>price :{item.price}$</Card.Title>
                                    <div className="main-add-cart-product">
                                      <AddButton link={`/products/productDetail/${item._id}`} />
                                      <p className="text-add-cart">Add To Cart</p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                  <div className="type-product mt-5 mb-5">
                    <h5 className="center-products-exist" style={{ marginRight: "2rem", marginTop: ".4rem" }}>
                      My Sponsor
                    </h5>
                    <div className="productBtnExist">
                      <button className="btn btn-secondary btn-type-product">Top</button>
                      <button className="btn btn-secondary btn-type-product">Popular</button>
                      <button className="btn btn-secondary btn-type-product" style={{ textDecoration: "line-through 2px red" }}>
                        Off%
                      </button>
                    </div>
                  </div>
                  <Carousel activeIndex={slideProduct} onSelect={handleSelect} style={{ marginBottom: "10rem" }}>
                    {slideImage.map((item, index) => {
                      return (
                        <Carousel.Item interval={1800} key={index}>
                          <img className="d-block w-100" src={item.url} alt="First slide" />
                          <Carousel.Caption>
                            <h3>{item.caption}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
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

export default Products;
