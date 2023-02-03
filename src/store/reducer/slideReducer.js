const slideReducer =(state=0,{type,payload})=> {
    switch (type) {
        case "slideProduct":
            return payload;
        default:
            return state;
    }
} 
export default slideReducer