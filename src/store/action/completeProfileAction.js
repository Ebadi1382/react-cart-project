import axios from "axios";

const completeProfileAction = (firstname, lastname, age, gender, city) => async (dispatch, getState) => {
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender,
        city: city,
      },
      {
        headers: {
          authorization: `Bearer ${loginInformation.user.token}`,
        },
      }
    );
    dispatch({ type: "SUCCESS_COMPLETE_DETAIL", payload: data });
  } catch (error) {
    dispatch({ type: "FAILD_COMPLETE_DETAIL", payload: error });
  }
};
export default completeProfileAction;
