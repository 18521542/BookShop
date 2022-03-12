import moment from "moment"
import { FETCH_BILLS_BY_USER, SELECT_BILL } from "../actions/bill"

const initialState = {
    bills:[],
    selectedBill:{},
}

export const billReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BILLS_BY_USER:
            const SortBillByDate = action.data.sort((bill1, bill2) => moment(bill1.created_at) < moment(bill2.created_at))
            return {
                ...state,
                bills: SortBillByDate,
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