import { createStore, combineReducers } from 'redux'
import { bookReducer } from './scenes/book'


var state = { book: { books: [], shelves: [] } }

var appReducer = combineReducers({
    book: bookReducer
})

const store = createStore(appReducer, state)
export default store