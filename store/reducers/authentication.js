import { auth_action } from "../actions/authentication"
const initialState = {
    isSignedIn: false,
    isRegistered: false,
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
        default:
            return {...state}
    }
}


export default authReducer;