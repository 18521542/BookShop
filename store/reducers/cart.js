import { add_item_to_cart } from "../actions/cart";

const initialState = {
    total: 0,
    bookName: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case add_item_to_cart:
            const existingItem = state.bookName.findIndex(item => item === action.itemName);
            if(existingItem>=0){
                return { ...state };
            } else {
                let newTotal = ++state.total;
                return {
                    ...state,
                    total: newTotal,
                    bookName: state.bookName.concat(action.itemName)
                }
            }
        default:
            return state;
    }
}

export default cartReducer;