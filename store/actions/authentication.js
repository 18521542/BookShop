import axios from "axios";
import { API_ENDPOINT } from "../../constant";

export const auth_action = {
    login: "login",
    register: "register"
}

export const register = (payload) => {
    return async dispatch => {
        const register_api = API_ENDPOINT + "/api/account/create"   
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
        // console.log(JSON.stringify(res.body))
        dispatch({
            type: auth_action.register,
            userInfo: payload,
        })

    }
}