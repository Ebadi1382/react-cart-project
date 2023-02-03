export const addNumProductCartAction = () => (dispatch, getState) => {
  dispatch({ type: "SUCCESS_NUM_ADD", payload: getState().NumProductCart });
  localStorage.setItem("numProductOrdered",JSON.stringify(getState().NumProductCart));
};
export const removeNumProductCartAction = () => (dispatch, getState) => {
  dispatch({ type: "SUCCESS_NUM_REMOVE", payload: getState().NumProductCart });
  localStorage.setItem("numProductOrdered",JSON.stringify(getState().NumProductCart));
};
