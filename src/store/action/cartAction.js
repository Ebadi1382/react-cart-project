import axios from "axios";

export const cartAction = (id) => async (dispatch, getState) => {
  const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
  try {
    const { data } = await axios.get(`http://kzico.runflare.run/product/${id}`, {
      headers: {
        authorization: `Bearer ${loginInformation.user.token}`,
      },
    });
    dispatch({ type: "SUCCESS_ADD_TO_CART", payload: data });
    localStorage.setItem("cartItem",JSON.stringify(getState().cartDetail.cartItem))
  } catch (error) {
  console.log(error)
  }
};
export const removeProudctAction = (id)=>(dispatch,getState)=> {
  dispatch({
    type:"CART_REMOVE_ITEM",
    payload:id
  })
  localStorage.setItem("cartItem",JSON.stringify(getState().cartDetail.cartItem))
}