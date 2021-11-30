export const auth_action = {
    login: "login",
    register: "register"
}

export const register = (payload) => {
    console.log(payload);
    return {
        type: auth_action.register,
        userInfo: payload,
    }
}