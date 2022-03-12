import { create_payment } from "../actions/payment"

const initialState = {
    price_total: 0,
    details:[],
}

export const paymentReducer = (state = initialState, action) => {
    switch(action.type){
        case create_payment:
            return {...state}
        default:
            return {...state}
    }
}