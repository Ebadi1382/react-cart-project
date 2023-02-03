import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import slideReducer from "./reducer/slideReducer";
import ProductDetailReducer from "./reducer/productDetaliReducer";
import signupReducer from "./reducer/signupReducer";
import loginReducer from "./reducer/loginReducer";
import profileReducer from "./reducer/profileReducer";
import completeProfileReducer from "./reducer/completeProfileReducer";
import imageProfileReducer from "./reducer/imageProfileReducer";
import { numProductCartReducer } from "./reducer/numProductCartReducer";
import cartReducer from "./reducer/cartReducer";
import changePasswordProfileReducer from "./reducer/changePasswordProfileReducer";
import completeDataOrder from "./reducer/completeDataOrderReducer";
import autoSlideReducer from "./reducer/autoSlideReducer";

const reducers = combineReducers({
  products: productReducer,
  slideReducer: slideReducer,
  productDetail: ProductDetailReducer,
  signUp: signupReducer,
  logIn: loginReducer,
  profile: profileReducer,
  completeProfile: completeProfileReducer,
  imageProfile: imageProfileReducer,
  NumProductCart: numProductCartReducer,
  cartDetail: cartReducer,
  changePassword: changePasswordProfileReducer,
  completeOrder: completeDataOrder,
  autoSlide:autoSlideReducer
});
const middleWere = [thunk];
const cartItemFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];
const initialState = {
  cartDetail: { cartItem: cartItemFromLocalStorage },
};
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleWere)));

export default store;
