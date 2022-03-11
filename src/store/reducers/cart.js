import { add_item_to_cart, decrease_quantity, increase_quantity, remove_item_from_cart } from "../actions/cart";

const initialState = {
    total: 0,
    totalMoney: 0,
    bookItems: [],
    books:[],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case add_item_to_cart:{
            let existingItem = state.bookItems.findIndex(item => item === action.itemName);
            if(existingItem>=0){
                return { ...state };
            } else {
                let newTotal = ++state.total;
                let newBooks = state.bookItems.concat(action.itemName);
                let newToTalMoney = state.totalMoney + action.itemName.price;
                return {
                    ...state,
                    total: newTotal,
                    booksItem: newBooks,
                    bookItems: newBooks,
                    totalMoney: newToTalMoney,
                }
            }
        }
        case remove_item_from_cart:{
            let existingItem = state.bookItems.findIndex(item => item === action.item);
            if(existingItem>=0){
                const index = state.bookItems.findIndex(book => book.id === action.item.id)
                state.bookItems.splice(index,1);
                const newToTalMoney = state.totalMoney - action.item.price;
                const newToTal = state.total - 1;
                return{
                    ...state,
                    totalMoney: newToTalMoney,
                    total: newToTal
                }
            }
        }
        case increase_quantity:{
            let existingItem = state.bookItems.findIndex(item => item === action.item);
            const newToTalMoney = state.totalMoney + (action.item.price);
            if(existingItem>=0){
                return{
                    ...state,
                    totalMoney: newToTalMoney,
                }
            }
            return {...state}
        }
        case decrease_quantity:{
            let existingItem = state.bookItems.findIndex(item => item === action.item);
            const newToTalMoney = state.totalMoney - (action.item.price);
            if(existingItem>=0){
                return{
                    ...state,
                    totalMoney: newToTalMoney,
                }
            }
            return {...state}
        }
        default:
            return state;
    }
}

export default cartReducer;