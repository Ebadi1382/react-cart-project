const productReducer = (state = { products: [] }, { type, payload }) => {
  switch (type) {
    case "REQUEST_GET_PRODUCT_Detail":
      return { loading: true, error: false, products:[] };
    case "SUCCESS_GET_PRODUCT_Detail":
      return { loading: false, error: false, products: payload };
    case "FALID_GET_PRODUCT_Detail":
      return { loading: false, error: true, products: ["Conection Faild Please Refresh Page"] };
    default:
      return state;
  }
};
export default productReducer;
