import { add_item_to_cart } from "../actions/cart";

const initialState = {
    total: 0,
    bookNames: [],
    books:[],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case add_item_to_cart:
            const existingItem = state.bookNames.findIndex(item => item === action.itemName);
            if(existingItem>=0){
                return { ...state };
            } else {
                let newTotal = ++state.total;
                let newBooks = state.bookNames.concat(action.itemName);
                return {
                    ...state,
                    total: newTotal,
                    bookNames: newBooks
                }
            }
        default:
            return state;
    }
}

export default cartReducer;