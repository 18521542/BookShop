import { API_ENDPOINT } from "../../constant";

export const FETCH_BILLS_BY_USER = "fetch_bill"

export const SELECT_BILL = "Select bill"

export const fetch_bills_by_user = (username) => {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const GetBillByUserApi = API_ENDPOINT + "/api/transaction/history";
    
            const res = await fetch(GetBillByUserApi, {
                headers:{
                    api_key: state.auth.user.access_token
                }
            })
    
            if(res.ok){
                const result = await res.json();
                dispatch({
                    type: FETCH_BILLS_BY_USER,
                    data: result,
                })
                return;
            }
            dispatch({
                type: FETCH_BILLS_BY_USER,
                data: []
            })
        } catch (error) {
            throw Error(error);
        }
    }
} 

export const selectBill = (bill) => {
    return {
        type: SELECT_BILL,
        billID: bill.id,
    }
} 