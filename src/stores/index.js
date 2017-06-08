import { createStore } from 'redux';

const reducer = (book = {}, action) => {
	console.log(reducer);
    switch (action.type) {
        case 'BOOKS_ADD':
            return Object.assign({}, book, { id: book.id + 1 });
        default:
            return book;
    }
}

const store = createStore(reducer);

export default store;
