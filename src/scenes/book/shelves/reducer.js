import * as actions from './actions'


export default (state = {}, action) => {
    switch (action.type) {
        case actions.SHELVES_ADD:
            return state.concat(action.shelf)


        case actions.SHELVES_UPDATE:
            return state.map(el => {
                if (el.id === action.shelf.id) {
                    el = action.shelf
                    return el
                }
                return el
            })

        case actions.SHELVES_DELETE:
            return state.filter(el => el.id !== action.shelf.id)

        case actions.SHELVES_FETCH:
            return action.shelves

        default:
            return state
    }
}