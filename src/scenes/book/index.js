import booksReducer from './books/reducer'
import BooksApp from './books'
import shelvesReducer from './shelves/reducer'
import ShelvesApp from './shelves'
import { combineReducers } from 'redux'


export var bookReducer = combineReducers({
    books: booksReducer,
    shelves: shelvesReducer
})
export var book = { books: [], shelves: [] }
export var Books = BooksApp
export var Shelves = ShelvesApp
