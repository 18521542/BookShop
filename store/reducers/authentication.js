import { auth_action } from "../actions/authentication"
const initialState = {
    isSignedIn: false,
    user: {
        access_token: "",
        refresh_token: "",
        username:"",
        password:"",
        telephone:"",
        ImageLink:"",
        Name:"",
        Telephone:"",
        Address:"",
        Email:""
    }
}

const authReducer = (state = initialState, action) => {
    // console.log("action.type")
    switch (action.type){
        case auth_action.register:
            return {
                ...state
            }
        case auth_action.login:
            const { username, password } = action.userInfo
            return{
                ...state,
                isSignedIn: true,
                user:{
                    username: username,
                    password: password
                }
            }
        default:
            return {...state}
    }
}


export default authReducer;