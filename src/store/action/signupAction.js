import axios from "axios";

const signupAction = (userName, email, password, mobileNumber) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post("http://kzico.runflare.run/user/signup", {
      username: userName,
      email: email,
      password: password,
      mobile: mobileNumber,
    });
    dispatch({type:"SUCCESS_CREATE_ACCOUNT",payload:data.message})
  } catch (error) {
    dispatch({type:"FAILD_CREATE_ACCOUNT",payload:error.response.data.message})
  }

};
export default signupAction;