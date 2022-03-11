import { API_ENDPOINT } from "../../constant";

export const FETCH_BOOKS = "fetch_book";

export const fetch_books = () => {
    return async dispatch => {
        const book_api = API_ENDPOINT + '/api/book'
        const res = await fetch(book_api);
        if(res.ok){
            const message = await res.json();
            dispatch({
                type: FETCH_BOOKS,
                data: message,
            })
        }
        else{
            dispatch({
                type: FETCH_BOOKS,
                data: [],
            })
        }
    }
}