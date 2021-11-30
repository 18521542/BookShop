import axios from "axios";
import Constants from "expo-constants";
import { API_ENDPOINT } from "../../constant";
const initalState = {
    author: [],
}

export const fetchAuthors = async () => {
    const Author_API = "/api/author"
    const res = await axios.get(API_ENDPOINT+ Author_API);
}