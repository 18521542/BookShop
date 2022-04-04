import Book from "../models/Book";

//id, name, description, imgLink
export const BOOKS = [
    new Book("b1","SGK","This is a basic description 1 ",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg'),
    new Book("b2","SGK van","This is a basic description 2",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg'),
    new Book("b3","No family","This is a basic description 3",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"),
    new Book("b4","Python note","This is a basic description 4",
    "https://dictionary.cambridge.org/vi/images/thumb/book_noun_001_01679.jpg?version=5.0.195"),
    new Book("b5","You and JS","This is a basic description 5",
    "https://www.rnib.org.uk/sites/default/files/Books%20and%20headphones.jpg")
]