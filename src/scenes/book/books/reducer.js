import * as actions from './actions'


export default (state = [], action) => {
    switch (action.type) {
        case actions.BOOKS_ADD:
            return state.concat(action.book)

        case actions.BOOKS_UPDATE:
            return state.map(el => {
                if (el.id === action.book.id) {
                    el = action.book
                    return el
                }
                return el
            })

        case actions.BOOKS_DELETE:
            return state.filter(el => el.id !== action.book.id)

        case actions.BOOKS_FETCH:
            return action.books

        default:
            return state
    }
}