import React, { useEffect, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductDetailAction from "../../store/action/productDetailAction";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import "./ProductDetail.css";
import AddButton from "../../utility/AddButton/AddButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import ProductAction from "../../store/action/productAction";
import { addNumProductCartAction, removeNumProductCartAction } from "../../store/action/numProductCartAction";
import { cartAction } from "../../store/action/cartAction";
import { toast } from "react-toastify";
import autoSlideAction from "../../store/action/autoSlideAction";

const ProductDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const numProductCart = useSelector((state) => state.NumProductCart);
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  useEffect(() => {
    dispatch(ProductAction());
  }, [dispatch]);
  const { productDetail } = useSelector((store) => store.productDetail);
  useEffect(() => {
    dispatch(ProductDetailAction(_id));
  }, [dispatch, _id]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const addNumProductCart = () => {
    dispatch(addNumProductCartAction());
  };
  const removeNumProductCart = () => {
    dispatch(removeNumProductCartAction());
  };
  const clickOrderNowHandler = () => {
    dispatch(cartAction(_id));
    toast.success("🦄 Product Added To Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
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
                            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <div className="image-productDetail">
                                <Card
                                  style={{
                                    backgroundColor: "#191919",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Card.Img
                                    style={{ width: "18rem", height: "24.8rem" }}
                                    variant="top"
                                    src={productDetail.image}
                                  />
                                </Card>
                              </div>
                            </Row>
                            <Row>
                              <div className="text-color-productDetail">
                                <p>Color :</p>
                                <div className="style-color-product">
                                  <div
                                    className={`color-product black ${
                                      productDetail.color === "black" ? "" : "not-availabe-color"
                                    }`}
                                  ></div>
                                  <div
                                    className={`color-product white ${
                                      productDetail.color === "white" ? "" : "not-availabe-color"
                                    }`}
                                  ></div>
                                  <div
                                    className={`color-product red ${productDetail.color === "red" ? "" : "not-availabe-color"}`}
                                  ></div>
                                  <div
                                    className={`color-product green ${
                                      productDetail.color === "green" ? "" : "not-availabe-color"
                                    }`}
                                  ></div>
                                </div>
                              </div>
                            </Row>
                            <Row style={{ backgroundColor: "#191919" }}>
                              <Col md={6}>
                                <div className="rating-productDetail">
                                  <h5>Rating</h5>
                                  <h3>{productDetail.rating} / 5</h3>
                                </div>
                              </Col>
                              <Col md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h5 className="text-countInstock">Inventory</h5>
                                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                                  {productDetail.countInStock === 0 ? "Not Availabe" : productDetail.countInStock}
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                        <Col md={8}>
                          <Row>
                            <div className="text-center">
                              <div className="orginal-product mb-2">Orginal Product</div>
                              <div className="brand-productDetail mb-2">{productDetail.brand}</div>
                              <div className="category-productDetail mb-2">{productDetail.category}</div>
                              <div className="mb-2 mt-2">{productDetail.name}</div>
                              <div className="style-price-btn mt-5 mb-5">
                                <p className="text-price">price:</p>
                                <div className="price-productDetail">{productDetail.price}$</div>
                                <div>
                                  {productDetail.countInStock === 0 ? (
                                    <button className="btn btn-warning disabled">Finished</button>
                                  ) : (
                                    <div className="style-order-button">
                                      {numProductCart > 0 ? (
                                        loginInformation === null ? (
                                          <></>
                                        ) : (
                                          <i
                                            onClick={removeNumProductCart}
                                            className="fa-solid fa-minus logo-sidebar fa-2xl me-2"
                                            style={{ transform: "scale(1)" }}
                                          ></i>
                                        )
                                      ) : (
                                        <></>
                                      )}
                                      {numProductCart > 0 ? (
                                        <button
                                          onClick={numProductCart === 0 ? () => {} : clickOrderNowHandler}
                                          className={`btn btn-info btn-productDetail ${numProductCart === 0 && "disabled"}`}
                                        >
                                          {numProductCart === 0 ? (
                                            loginInformation === null ? (
                                              "Please log In"
                                            ) : (
                                              "Order Now"
                                            )
                                          ) : (
                                            <span style={{ fontSize: "1.2rem" }}>{numProductCart}X</span>
                                          )}
                                          {numProductCart === 0 ? (
                                            loginInformation === null ? (
                                              <></>
                                            ) : (
                                              <i className="fa-solid fa-cart-plus" style={{ color: "#fff" }}></i>
                                            )
                                          ) : (
                                            <></>
                                          )}
                                        </button>
                                      ) : (
                                        <button
                                          onClick={numProductCart === 0 ? () => {} : clickOrderNowHandler}
                                          className={`btn btn-info btn-productDetail ${
                                            numProductCart === 0 ? "btn-finished" : ""
                                          }`}
                                        >
                                          {numProductCart === 0 ? (
                                            loginInformation === null ? (
                                              "Please log In"
                                            ) : (
                                              "Order Now"
                                            )
                                          ) : (
                                            <span style={{ fontSize: "1.2rem" }}>{numProductCart}X</span>
                                          )}
                                          {numProductCart === 0 ? (
                                            loginInformation === null ? (
                                              <></>
                                            ) : (
                                              <i className="fa-solid fa-cart-plus" style={{ color: "#fff" }}></i>
                                            )
                                          ) : (
                                            <></>
                                          )}
                                        </button>
                                      )}
                                      {loginInformation === null ? (
                                        <></>
                                      ) : (
                                        <i
                                          onClick={addNumProductCart}
                                          className="fa-solid fa-plus logo-sidebar fa-2xl ms-2"
                                          style={{ transform: "scale(1)" }}
                                        ></i>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}></Col>
                        <Col>
                          <h2 className="text-center mt-5" style={{ color: "#9665d8" }}>
                            Other Product
                          </h2>
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
                                {products.map((item, index) => {
                                  return (
                                    <SwiperSlide key={index} style={{ padding: "0 0 4rem 0rem" }}>
                                      <Card
                                        style={{
                                          margin: "0",
                                          backgroundColor: "#28282a",
                                          border: "0",
                                          padding: "0 0 2rem 0",
                                          background: "#191919",
                                        }}
                                      >
                                        <Link to={`/products/productDetail/${item._id}`}>
                                          <Card.Img variant="top" src={item.image} style={{ height: "18rem" }} />
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
                                            {item.brand}
                                            <AddButton />
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

export default ProductDetail;
