export const numProductCartReducer = (state=0,{type,payload})=> {
    switch (type) {
        case "SUCCESS_NUM_ADD":    
            return state+1;
        case "SUCCESS_NUM_REMOVE":    
            return state-1;
        default:
            return state;
    }
}
// export const removeNumProductCartReducer = (state=0,{type,payload})=> {
//     console.log("remove",state)
//     switch (type) {
//         case "SUCCESS_NUM_REMOVE":    
//             return payload;
//         default:
//             return state;
//     }
// }