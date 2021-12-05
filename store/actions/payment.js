import { API_ENDPOINT } from "../../constant"

export const create_payment = "CREATE PAYMENT"

export const createPayment = (paymentInfo) => {
    return async (dispatch, getState) => {
        const create_payment_api = API_ENDPOINT + "/api/transaction"
        const state = getState();

        const resContent = {
            method:"POST",
            headers:{
                api_key: state.auth.user.access_token
            },
            body: JSON.stringify(paymentInfo),
            // body: {paymentInfo},
            headers:{
                'Content-Type':'application/json'
            },
        }
        const res = await fetch(create_payment_api, resContent)

        if(res.ok){
            const result = await res.json()
        }
        else{
            console.log("here")
        }
        dispatch({
            type: create_payment,
            payload: paymentInfo,
        })
    }
}