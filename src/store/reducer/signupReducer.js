const signupReducer = (state=[],{type,payload})=> {
    switch (type) {
        case "SUCCESS_CREATE_ACCOUNT":
            return payload;
        case "FAILD_CREATE_ACCOUNT":
            return payload;
        default:
            return state;
    }
}
export default signupReducer