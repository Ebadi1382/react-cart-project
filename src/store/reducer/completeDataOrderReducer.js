const completeDataOrder = (state=[],{type,payload})=> {
    switch (type) {
        case "SUCCESS_COMPLETE_DATA":
            return payload;
        case "FAILD_COMPLETE_DATA":
            return payload;
        default:
            return state;
    }
}
export default completeDataOrder