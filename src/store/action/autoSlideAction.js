const autoSlideAction = ()=>(dispatch,getState)=> {
    dispatch({type:"SUCCESS_OPEN",payload:!getState().autoSlide})
}
export default autoSlideAction