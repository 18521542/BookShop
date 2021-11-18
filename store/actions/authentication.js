export const auth_action = {
    login: "login",
    register: "register"
}

export const register = (payload) => {
    return {
        type: auth_action.register,
        userInfo: payload,
    }
}