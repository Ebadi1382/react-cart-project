import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Cart from "./pages/Cart/Cart";
import CompleteProfile from "./pages/CompleteProfile/CompleteProfile";
import LogIn from "./pages/LogIn/LogIn";
import MainPage from "./pages/MainPage/MainPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductDetailSoon from "./pages/ProductDetailSoon/ProductDetailSoon";
import Products from "./pages/Products/Products";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import CompleteOrderDetail from "./pages/CompleteOrderDetail/CompleteOrderDetail";
import ViewFinalOrder from "./pages/ViewFinalOrder/ViewFinalOrder";
import Notification from "./pages/Notification/Notification";
import NotFind404 from "./pages/NotFind404/NotFind404";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/profile/complete_profile" element={<CompleteProfile />} />
          <Route path="/profile/login" element={<LogIn />} />
          <Route path="/profile/signup" element={<SignUp />} />
          <Route path="/profile/change_password" element={<ChangePassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/complete_data" element={<CompleteOrderDetail />} />
          <Route path="/cart/complete_data/final_veiw" element={<ViewFinalOrder />} />
          <Route path="/products/productDetail/:_id" element={<ProductDetail />} />
          <Route path="/products/productDetailSoon/:_id" element={<ProductDetailSoon />} />
          <Route path="*" element={<NotFind404 />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
