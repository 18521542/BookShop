import axios from "axios";
import { API_ENDPOINT } from "../../constant";

export const auth_action = {
    login: "login",
    register: "register",
    logout:"logout"
}

export const register = (payload) => {
    return async dispatch => {
        const register_api = API_ENDPOINT + "/api/account/create"   
        try {
            const res = await fetch(register_api, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: payload.Username,
                    password: payload.Password
                })
            })

            if(res.ok){
                const rs = await res.json();
                if(rs.message === "The account is existed, please check again!"){
                    throw Error("Đã tồn tại tài khoản với username này")
                }
                dispatch({
                    type: auth_action.register,
                    userInfo: payload,
                })
            }
        } catch (error) {
            throw new Error("Đã có lỗi xảy ra")
        }
    }
}

export const login = (payload) => {
    return async dispatch => {
        // try{
            const login_api = API_ENDPOINT + "/api/account/login"
                const res = await fetch(login_api, {
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username: payload.username,
                    password: payload.password
                })
            })

            if(res.ok){
                const result = await res.json();
                if(result.access_jwt_token){
                    dispatch({
                        type: auth_action.login,
                        userInfo: {
                            username: payload.username, 
                            password: payload.password, 
                            access_jwt_token: result.access_jwt_token, 
                            refresh_jwt_token: result.refresh_jwt_token 
                        },
                        isAuthenticated: true
                    })
                }
                else{
                    throw new Error(result.message)
                }
            }
    }
}

export const logout = () => {
    return {
        type: auth_action.logout,
    }
}