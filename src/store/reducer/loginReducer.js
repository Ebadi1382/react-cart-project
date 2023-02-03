const loginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESSFUL":
      return payload;
    case "LOGIN_FAILD":
      return payload;
    default:
      return state;
  }
};
export default loginReducer;
