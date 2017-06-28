export default (state = {}, action) => {
    switch (action.type) {
        case 'SHELVES_ADD':
            state.push(action.shelf);
            return state;

        case 'SHELVES_UPDATE':
            action.shelf.price += 100;
            return state;

        case 'SHELVES_DELETE':
            return state.filter(el => el.id !== action.id);

        case 'SHELVES_DOWNLOAD':
            return action.shelves;

        default:
            return state;
    }
}
