import * as actions from './actions'


export default (state = {}, action) => {
    var newState = state;
    switch (action.type) {
        case actions.SHELVES_ADD:
            newState = state.concat(action.shelf)
            return newState

        case actions.SHELVES_UPDATE:
            newState = state.map(el => {
                if (el.id === action.shelf.id) {
                    el = action.shelf
                    return el
                }
                return el
            })
            return newState

        case actions.SHELVES_DELETE:
            return state.filter(el => el.id !== action.shelf.id)

        case actions.SHELVES_DOWNLOAD:
            return action.shelves

        default:
            return state
    }
}
