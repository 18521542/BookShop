import { BOOKS } from "../../dummy-data/BOOK";
import { FETCH_BOOKS } from "../actions/book";


const initialState = {
    data: BOOKS,
    selectedBook: "",
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BOOKS:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}

export default bookReducer;