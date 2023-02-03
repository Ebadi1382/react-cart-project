const imageProfileReducer = (state=null,{type,payload})=> {
    switch (type) {
        case "SUCCESS_LOAD_IMAGE":
            return payload;
        case "FAILD_LOAD_IMAGE":
            return payload;
        default:
            return state;
    }
}
export default imageProfileReducer