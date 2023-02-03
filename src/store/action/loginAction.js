import axios from "axios";

const loginAction = (email, password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("loginDetail", JSON.stringify(data));
    
    dispatch({
      type: "LOGIN_SUCCESSFUL",
      payload: data,
    });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILD", payload: error.response.data });
    console.log(error.response.data);
  }
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${loginInformation.user.token}`,
      }
    });
    localStorage.setItem("profileDetail", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
export default loginAction;
