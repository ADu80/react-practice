import * as actions from './actions'


export default (booksState = [], action) => {
    var newState = booksState;
    switch (action.type) {
        case actions.BOOKS_ADD:
            newState = booksState.concat(action.book)
            return newState

        case actions.BOOKS_UPDATE:
            newState = booksState.map(el => {
                if (el.id === action.book.id) {
                    el = action.book
                    return el
                }
                return el
            })
            return newState

        case actions.BOOKS_DELETE:
            newState = booksState.filter(el => el.id !== action.book.id)
            return newState

        case actions.BOOKS_FETCH:
            return action.books

        default:
            return booksState
    }
}
