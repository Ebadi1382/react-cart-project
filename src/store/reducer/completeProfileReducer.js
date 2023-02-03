const completeProfileReducer = (state={},{type,payload})=> {
    switch (type) {
        case "SUCCESS_COMPLETE_DETAIL":
            return payload;
        case "FAILD_COMPLETE_DETAIL":
            return payload;
        default:
            return state;
    }
}
export default completeProfileReducer