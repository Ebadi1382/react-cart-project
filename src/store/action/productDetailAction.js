import axios from "axios";

const ProductDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "REQUEST_GET_PRODUCT" });
    const { data } = await axios.get(`http://kzico.runflare.run/product/${id}`);
    dispatch({ type: "SUCCESS_GET_PRODUCT",payload:data });
  } catch (error) {
    dispatch({type:"FALID_GET_PRODUCT",payload:"Faild Request Proudct Please Refresh Page"})
  }
};
export default ProductDetailAction;