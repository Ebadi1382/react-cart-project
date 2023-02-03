import axios from "axios";

const completeDataOrderAction = (product, address, city, postalCode, phone, typePay) => async (dispatch, getState) => {
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/order/submit",
      {
        orderItems: product,
        shippingAddress: {
          address: address,
          city: city,
          postalCode: postalCode,
          phone: phone,
        },
        paymentMethod: typePay,
        shippingPrice: "2",
        totalPrice: totalPrice,
      },
      {
        headers: {
          authorization: `Bearer ${loginInformation.user.token}`,
        },
      }
    );
    dispatch({ type: "SUCCESS_COMPLETE_DATA", payload: data });
    localStorage.setItem("totalPrice",JSON.stringify(0))
    localStorage.setItem("cartItem",JSON.stringify([]))
    localStorage.setItem("numProductOrdered",JSON.stringify(0))
  } catch (error) {
    dispatch({ type: "FAILD_COMPLETE_DATA", payload: error.response.data.message });
    console.log(error.response.data.message);
  }
};
export default completeDataOrderAction;
