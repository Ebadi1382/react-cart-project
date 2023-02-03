const changePasswordProfileReducer = (state=[],{type,payload})=> {
    switch (type) {
        case "SUCCESS_CHANGE_PASSWORD":
            return payload;
        case "FAILD_CHANGE_PASSWORD":
            return payload;
        default:
            return state;
    }
}
export default changePasswordProfileReducer