import axios from "axios";

const changePasswordProfileAction = (oldP, NewP) => async (dispatch, getState) => {
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-password",
      {
        old_password: oldP,
        new_password: NewP,
      },
      {
        headers: {
          authorization: `Bearer ${loginInformation.user.token}`,
        },
      }
    );
    dispatch({ type: "SUCCESS_CHANGE_PASSWORD", payload: data });
  } catch (error) {
    dispatch({ type: "FAILD_CHANGE_PASSWORD", payload: error.response.data });
    console.log(error);
  }
};
export default changePasswordProfileAction;
