const ProductDetailReducer = (state = { productDetail: {} }, { type, payload }) => {
    switch (type) {
      case "REQUEST_GET_PRODUCT":
        return { loading: true, error: false, ...state };
      case "SUCCESS_GET_PRODUCT":
        return { loading: false, error: false, productDetail: payload };
      case "FALID_GET_PRODUCT":
        return { loading: false, error: true, productDetail: ["Conection Faild Please Refresh Page"] };
      default:
        return state;
    }
  };
  export default ProductDetailReducer;