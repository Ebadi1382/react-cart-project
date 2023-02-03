import React, { useEffect, useRef } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import slideImage from "../../image/slideImage/slideImage";
import imagesSwiper from "../../image/slideSwiper/slideSwiper";
import { useDispatch, useSelector } from "react-redux";
import ProductAction from "../../store/action/productAction";
import slideAction from "../../store/action/slideAction";
import imageOtherProductOne from "../../image/otherProduct/1.jpg";
import imageOtherProductTwo from "../../image/otherProduct/2.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./Product.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AddButton from "../../utility/AddButton/AddButton";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
  const slideProduct = useSelector((state) => state.slideProduct);
  const handleSelect = (selectedIndex, e) => {
    dispatch(slideAction(selectedIndex));
  };
  useEffect(() => {
    dispatch(ProductAction());
  }, [dispatch]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="main-product">
      <Carousel activeIndex={slideProduct} onSelect={handleSelect}>
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
      <div className="main-type-product">
        <Col md={10} style={{ marginTop: "3rem" }}>
          <div className="type-product">
            <h5 style={{ marginRight: "2rem", marginTop: ".4rem" }}>Our Product</h5>
            <div className="productBtnExist">
              <button className="btn btn-secondary btn-type-product">Top</button>
              <button className="btn btn-secondary btn-type-product">Popular</button>
              <button className="btn btn-secondary btn-type-product" style={{ textDecoration: "line-through 2px red" }}>
                Off%
              </button>
            </div>
          </div>
        </Col>
        <Col md={2} style={{ display: "flex", justifyContent: "flex-end", marginTop: "3rem" }}>
          <p style={{ color: "#64676c", marginBottom: "0", display: "flex", alignItems: "center" }}>Categorys</p>
        </Col>
      </div>
      <div className="all-product">
        {loading ? (
          <div className="spinner-border p-4 mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="products mt-5">
            {error ? (
              <p>{products}</p>
            ) : (
              products.splice(0, 8).map((item) => {
                return (
                  <div key={item._id} className="product-detail">
                    <Card style={{ margin: "0", backgroundColor: "#28282a", border: "0" }}>
                      <Link to={`/products/productDetail/${item._id}`}>
                        <Card.Img variant="top" src={item.image} style={{ height: "20rem" }} />
                      </Link>
                      <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Card.Title style={{ color: "#fff" }}>{item.brand}</Card.Title>
                        <Card.Title style={{ color: "#64676c", fontWeight: "400", fontSize: "1rem" }}>{item.category}</Card.Title>
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
      <div className="other-product mb-5" style={{ marginTop: "5rem" }}>
        <div className="d-flex justify-content-between mt-5 mb-5 align-items-center">
          <h4 className="center-products-exist">Other product</h4>
          <p style={{ marginBottom: "0" }}>category</p>
        </div>
        <div className="other-product-all-detail">
          <Row>
            <Col lg={6} style={{marginBottom:"1rem"}}>
              <Card style={{ textAlign: "center" }}>
                <Card.Img
                  className="product-otherProduct"
                  src={imageOtherProductOne}
                  style={{ height: "22.6rem" }}
                  alt="Card image"
                />
                <Card.ImgOverlay style={{ marginTop: "11rem" }}>
                  <Card.Title className="product-otherProduct-title">Card title</Card.Title>
                  <Card.Text className="product-otherProduct-text-detail">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Text className="product-otherProduct-text">Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col lg={6} style={{marginBottom:"1rem"}}>
              <Card style={{ textAlign: "center" }}>
                <Card.Img
                  className="product-otherProduct"
                  src={imageOtherProductTwo}
                  style={{ height: "22.6rem" }}
                  alt="Card image"
                />
                <Card.ImgOverlay style={{ marginTop: "11rem" }}>
                  <Card.Title className="product-otherProduct-title">Card title</Card.Title>
                  <Card.Text className="product-otherProduct-text-detail">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Card.Text className="product-otherProduct-text">Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="slideShow-product-small">
        <div className="main-type-product">
          <Col md={10} style={{ marginTop: "3rem" }}>
            <div className="type-product">
              <h5 style={{ marginRight: "2rem", marginTop: ".4rem" }}>Coming Soon</h5>
              <div className="productBtnExist">
                <button className="btn btn-secondary btn-type-product">Top</button>
                <button className="btn btn-secondary btn-type-product">Popular</button>
                <button className="btn btn-secondary btn-type-product" style={{ textDecoration: "line-through 2px red" }}>
                  Off%
                </button>
              </div>
            </div>
          </Col>
          <Col md={2} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "3rem" }}>
            <div className="me-3 d-flex">
              <div ref={navigationPrevRef} className="me-3 arrow-div-swiper">
                <i className="fa-solid fa-chevron-left fa-xl arrow-swiper"></i>
              </div>
              <div ref={navigationNextRef} className="arrow-div-swiper">
                <i className="fa-solid fa-chevron-right fa-xl arrow-swiper"></i>
              </div>
            </div>
            <p style={{ color: "#64676c", marginBottom: "0", display: "flex", alignItems: "center" }}>Categorys</p>
          </Col>
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
                          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}
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
      </div>
    </div>
  );
};

export default Products;
