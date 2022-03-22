import Book from "../models/Book";

//id, name, description, imgLink
export const BOOKS = [
    new Book("b1","SGK","This is a basic description 1 ",
    "data:image/jpeg;base64,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"),
    new Book("b2","SGK van","This is a basic description 2",
    "data:image/jpeg;base64,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"),
    new Book("b3","No family","This is a basic description 3",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"),
    new Book("b4","Python note","This is a basic description 4",
    "https://dictionary.cambridge.org/vi/images/thumb/book_noun_001_01679.jpg?version=5.0.195"),
    new Book("b5","You and JS","This is a basic description 5",
    "https://www.rnib.org.uk/sites/default/files/Books%20and%20headphones.jpg")
]