import { API_ENDPOINT } from "../../constant"

export const FETCH_AUTHOR = "FETCH_AUTHOR";
export const FILTER_BOOK_BY_AUTHOR = "Filter book by author"


export const FetchAuthors = () => {
    return async dispatch => {
        const authorAPI = API_ENDPOINT+"/api/author"
        const res = await fetch(authorAPI);
        let data = null;
        if(res.ok){
            data = await res.json();
        }
        dispatch({
            type: FETCH_AUTHOR,
            data: data,
        })
    }
}

export const FilterBookByAuthor = (author) => {
    return async (dispatch) => {
        const filterBookByAuthorAPI = API_ENDPOINT + "/api/book/filterAuthor"
        let res = await fetch(`${filterBookByAuthorAPI}/${author.id}`)
        let data = [];
        if(res.ok){
            let books = await res.json()
            data.push(books)
        }
        dispatch({
            type: FILTER_BOOK_BY_AUTHOR,
            data: data,
            selectedAuthor: author,
        })
    }
}