const cartReducer = (state = {cartItem:[]}, { type, payload }) => {
  const numProduct = JSON.parse(localStorage.getItem("numProductOrdered"))
  switch (type) {
    case "SUCCESS_ADD_TO_CART":
      const existingItem = state.cartItem.find((i) => {
        return i._id === payload._id;
      });
      if (existingItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((i) => {
            return i._id === existingItem._id&& {payload,qty:numProduct};
              }),
            };
          } else {
            return {
              ...state,
              cartItem: [...state.cartItem, [payload,{qty:numProduct}]],
            };
          }
          case "CART_REMOVE_ITEM":
            return {
              ...state,
              cartItem: state.cartItem.filter((item) => item[0]._id !== payload),
            };
    default:
      return state;
  }
};
export default cartReducer