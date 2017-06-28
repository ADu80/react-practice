import { createStore, combineReducers } from 'redux';
import { book, bookReducer } from './scenes/book';


var state = { book }

var appReducer = combineReducers({
    book: bookReducer
})

const stores = createStore(appReducer, state);
export default stores;
