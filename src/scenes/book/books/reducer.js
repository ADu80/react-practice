import * as actions from './actions';


export default (state = {}, action) => {
    switch (action.type) {
        case actions.BOOKS_ADD:
            state.push(action.book);
            return state;

        case actions.BOOKS_UPDATE:
            action.book.price += 100;
            return state;

        case actions.BOOKS_DELETE:
            state.splice(state.findIndex(el => el.id === action.id), 1);
            return state;
            // return state.filter(el => el.id !== action.id);

        case actions.BOOKS_DOWNLOAD:
            return action.books;

        default:
            return state;
    }
}
