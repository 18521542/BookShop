import { API_ENDPOINT } from "../../constant"

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FILTER_BOOK_BY_CATEGORY = "Filter book by CATEGORY"


export const FetchCategories = () => {
    return async dispatch => {
        const CATEGORYAPI = API_ENDPOINT+"/api/category?page=1"
        const res = await fetch(CATEGORYAPI);
        let data = null;
        if(res.ok){
            data = await res.json();
        }
        dispatch({
            type: FETCH_CATEGORY,
            data: data,
        })
    }
}

export const FilterBookByCATEGORY = (CATEGORY) => {
    return async (dispatch) => {
        const filterBookByCategoryAPI = API_ENDPOINT + "/api/book/filterCategory"
        let res = await fetch(`${filterBookByCategoryAPI}/${CATEGORY.id}`)
        let data = [];
        if(res.ok){
            let books = await res.json()
            data.push(books)
        }
        dispatch({
            type: FILTER_BOOK_BY_CATEGORY,
            data: data,
            selectedCategory: CATEGORY,
        })
    }
}