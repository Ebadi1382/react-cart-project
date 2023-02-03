import axios from "axios";

const profileAction = () => async (dispatch, getState) => {
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${loginInformation.user.token}`,
      }
    });
    dispatch({ type: "SUCCESS_GET_PROFILEDETALS", payload: data });
    localStorage.setItem("profileDetail", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
export default profileAction;
