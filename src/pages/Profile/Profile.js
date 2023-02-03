import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SideMenu2 from "../SlideMenu2/SlideMenu2";
import homeLogo from "../../image/homeLogo/homeLogo.png";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "../../store/action/profileAction";
import imageProfileAction from "../../store/action/imageProfileAction";
import autoSlideAction from "../../store/action/autoSlideAction";

const Profile = () => {
  const profileInformation = JSON.parse(localStorage.getItem("profileDetail"));
  const dispatch = useDispatch();
  const profileDetail = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(profileAction());
  }, [dispatch]);
  const changeImageHandler = (e) => {
    dispatch(imageProfileAction(e.target.files[0]));
  };
  const clickLogOutHandler = () => {
    localStorage.removeItem("profileDetail");
    localStorage.removeItem("loginDetail");
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
                <div className="pt-5 d-flex flex-column justify-content-center align-items-center main-profile-exist">
                  <Container>
                    <Row>
                      <Col md={9}>
                        <div className="style-text-products text-product-exist">
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
                                F
                              </div>
                              <div className="shadow">F</div>
                            </div>
                            <div className="wrapper">
                              <div id="T" className="letter">
                                I
                              </div>
                              <div className="shadow">I</div>
                            </div>
                            <div className="wrapper">
                              <div id="N" className="letter">
                                E
                              </div>
                              <div className="shadow">E</div>
                            </div>
                          </div>
                        </div>
                        <div className="main-profile">
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>User Name</p>
                            <p>{profileDetail ? profileDetail.user.username : "not logged in"}</p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>Email</p>
                            <p>{profileDetail ? profileDetail.user.email : "not logged in"}</p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>Password</p>
                            <input
                              className="input-profile-password"
                              onChange={() => {}}
                              type="password"
                              value={profileDetail ? "000000000000" : "not logged in"}
                            />
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>First Name</p>
                            <p>
                              {profileInformation.user.firstname ? (
                                profileInformation.user.firstname
                              ) : (
                                <span className="text-danger">Not Set</span>
                              )}
                            </p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>Last Name</p>
                            <p>
                              {profileInformation.user.lastname ? (
                                profileInformation.user.lastname
                              ) : (
                                <span className="text-danger">Not Set</span>
                              )}
                            </p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>Mobile Number</p>
                            <p>{profileDetail ? profileInformation.user.mobile : "not logged in"}</p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>Age</p>
                            <p>
                              {profileInformation.user.age ? (
                                profileInformation.user.age
                              ) : (
                                <span className="text-danger">Not Set</span>
                              )}
                            </p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>gender</p>
                            <p>
                              {profileInformation.user.gender ? (
                                profileInformation.user.gender
                              ) : (
                                <span className="text-danger">Not Set</span>
                              )}
                            </p>
                          </div>
                          <div className="line"></div>
                          <div className="d-flex justify-content-between px-3 py-4">
                            <p>City</p>
                            <p>
                              {profileInformation.user.city ? (
                                profileInformation.user.city
                              ) : (
                                <span className="text-danger">Not Set</span>
                              )}
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md={3} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <form onSubmit={(e) => e.preventDefault()} className="main-profile-image">
                          <label htmlFor="image-upload" style={{ whiteSpace: "nowrap" }} className="custom-file-upload mt-3">
                            Upload Profile Image
                          </label>
                          <input className="input-upload-image" id="image-upload" onChange={changeImageHandler} type="file" />
                        </form>
                        <img
                          className="image-profile-avatar ms-3"
                          src={profileInformation.user.image}
                          alt="profile avatar"
                          width="50px"
                        />
                        <Link to="/profile/change_password" style={{ textDecoration: "none", marginTop: "15rem" }}>
                          <button className="btn btn-outline-secondary" type="submit">
                            Change Password
                          </button>
                        </Link>
                        <Link to="/" style={{ textDecoration: "none", marginTop: "2rem" }}>
                          <button onClick={clickLogOutHandler} className="btn btn-outline-danger" type="submit">
                            Log Out
                          </button>
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                  <div>
                    <Link to="/profile/complete_profile">
                      <button className="btn btn-outline-secondary mt-5">Complete Profile</button>
                    </Link>
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

export default Profile;
