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

        case actions.BOOKS_DOWNLOAD:
            console.log(state, action);
            return action.books;

        default:
            return state;
    }
}
