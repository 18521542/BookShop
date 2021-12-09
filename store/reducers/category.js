import { FETCH_CATEGORY, FILTER_BOOK_BY_CATEGORY } from "../actions/category";
const initalState = {
    categories: [],
    BooksByCategory: [],
    selectedCategory: {},
}

const categoryReducer = (state = initalState, action) => {
    switch(action.type){
        case FETCH_CATEGORY:
            return{
                ...state,
                categories: action.data,
            }
        case FILTER_BOOK_BY_CATEGORY:
            return {
                ...state,
                BooksByCategory:action.data,
                selectedCategory: action.selectedCategory,
            }
        default:
            return { ...state }
    }
}

export default categoryReducer;