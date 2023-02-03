const slideAction=(num)=>(dispatch,getState)=> {
    dispatch({type:"slideProduct",payload:getState()+num})
}
export default slideAction