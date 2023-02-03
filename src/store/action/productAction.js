import axios from "axios";

const ProductAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "REQUEST_GET_PRODUC_DetailT" });
    const { data } = await axios.get("http://kzico.runflare.run/product");
    dispatch({ type: "SUCCESS_GET_PRODUCT_Detail", payload: data.splice(14, 24) });
  } catch (error) {
    dispatch({ type: "FALID_GET_PRODUCT_Detail", payload: "Faild Request Proudct Please Refresh Page" });
    console.log(error);
  }
};
export default ProductAction;
