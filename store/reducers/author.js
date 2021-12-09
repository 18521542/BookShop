import axios from "axios";
import Constants from "expo-constants";
import { API_ENDPOINT } from "../../constant";
import { FETCH_AUTHOR, FILTER_BOOK_BY_AUTHOR } from "../actions/author";
const initalState = {
    authors: [],
    BooksByAuthor: [],
}

const authorReducer = (state = initalState, action) => {
    switch(action.type){
        case FETCH_AUTHOR:
            return{
                ...state,
                authors: action.data,
            }
        case FILTER_BOOK_BY_AUTHOR:
            return {
                ...state,
                BooksByAuthor:action.data,
            }
        default:
            return { ...state }
    }
}

export default authorReducer;