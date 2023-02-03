import axios from "axios"

const imageProfileAction = (image)=> async(dispatch,getState)=> {
    const loginInformation = JSON.parse(localStorage.getItem("loginDetail"));
    try {
        const formData = new FormData()
        formData.append("profile-image",image)
        const {data}= await axios.post("http://kzico.runflare.run/user/profile-image",
        formData,
        {
          headers: {
            authorization:
              `Bearer ${loginInformation.user.token}`,
          },
        })
        dispatch({type:"SUCCESS_LOAD_IMAGE",payload:data})
    } catch (error) {
        dispatch({type:"FAILD_LOAD_IMAGE",payload:error})
        console.log(error)
    }
}
export default imageProfileAction