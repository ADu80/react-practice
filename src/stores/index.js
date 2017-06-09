import { createStore } from 'redux';
import books from './books';

const reducer = (state = books, action) => {
    switch (action.type) {
        case 'BOOKS_ADD':
            state.push(action.book);
            return state;
        case 'BOOKS_UPDATE':
            action.book.price += 100;
            return state;
        case 'BOOKS_DELETE':
            return state.splice(state.findIndex(el => el.id === action.id), 1);
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
