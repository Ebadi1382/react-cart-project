import "./MainPage.css";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import Product from "../../components/Product/Product";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import autoSlideAction from "../../store/action/autoSlideAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const clickToOpenSide = () => {
    dispatch(autoSlideAction());
  };
  return (
    <div className="main-page">
      <Container fluid>
        <Row>
          <SideMenu2 />
          <Col lg={2} id="sideMenuExist" style={{ padding: "0" }}>
            <SideMenu />
          </Col>
          <Col id="main-homeExist" md={10} style={{ marginTop: "1.2rem" }}>
            <Container fluid>
              <Col md={11} style={{ margin: "0 auto" }}>
                <Header clickToOpenSide={clickToOpenSide} />
                <div className="pt-5">
                  <Product />
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
        <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ margin: "0", whiteSpace: "nowrap" }}>All right reserved 2022</p>
          <i className="fa-solid fa-copyright"></i>
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

export default MainPage;
