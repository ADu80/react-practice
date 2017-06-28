export default (state = {}, action) => {
    switch (action.type) {
        case 'BOOKS_ADD':
            state.push(action.book);
            return state;

        case 'BOOKS_UPDATE':
            action.book.price += 100;
            return state;

        case 'BOOKS_DELETE':
            state.splice(state.findIndex(el => el.id === action.id), 1);
            return state;
            // return state.filter(el => el.id !== action.id);

        case 'BOOKS_DOWNLOAD':
            return action.books;

        default:
            return state;
    }
}
