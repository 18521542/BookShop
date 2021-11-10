import { BOOKS } from "../../dummy-data/BOOK";


const initialState = {
    data: BOOKS,
    selectedBook: "",
}

const bookReducer = (state = initialState, action) => {
    return state;
}

export default bookReducer;