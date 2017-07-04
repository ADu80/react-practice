import { createStore, combineReducers } from 'redux'
import { book, bookReducer } from './scenes/book'


var state = { book }

var appReducer = combineReducers({
    book: bookReducer
})

const store = createStore(appReducer, state);
export default store;
