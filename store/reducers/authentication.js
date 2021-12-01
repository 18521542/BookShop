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
    switch (action.type){
        case auth_action.register:
            return {
                ...state
            }
        case auth_action.login:
            const { username, password, access_jwt_token, refresh_jwt_token } = action.userInfo

            const newState = {
                ...state,
                isSignedIn: true,
                user:{
                    username: username,
                    password: password,
                    access_token: access_jwt_token,
                    refresh_token: refresh_jwt_token,
                }
            }
            const currentState = {...state};
            return (action.isAuthenticated)? newState : currentState
        case auth_action.logout:
            return {
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
        default:
            return {...state}
    }
}


export default authReducer;