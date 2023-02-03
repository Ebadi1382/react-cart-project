const profileReducer = (state=null,{type,payload})=> {
    switch (type) {
        case "SUCCESS_GET_PROFILEDETALS":
            return payload;
        case "FAILD_GET_PROFILEDETALS":
            return payload;
        default:
            return state;
    }
}
export default profileReducer