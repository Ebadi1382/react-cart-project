const autoSlideReducer = (state=false,{type,payload})=> {
    switch (type) {
        case "SUCCESS_OPEN":
            return payload;
        default:
            return state;
    }
}
export default autoSlideReducer