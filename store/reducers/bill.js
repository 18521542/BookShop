import { FETCH_BILLS_BY_USER, SELECT_BILL } from "../actions/bill"

const initialState = {
    bills:[],
    selectedBill:{},
}

export const billReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BILLS_BY_USER:
            return {
                ...state,
                bills: action.data,
            }
        case SELECT_BILL:
            const { billID } = action;
            const currentSelectedBill = state.bills.find(bill => bill.id === billID)
            return {
                ...state,
                selectedBill: currentSelectedBill,
            }
        default:
            return {...state}
    }
}