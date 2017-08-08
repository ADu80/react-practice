export const SHELVES_ADD = 'SHELVES_ADD'
export const SHELVES_UPDATE = 'SHELVES_UPDATE'
export const SHELVES_DELETE = 'SHELVES_DELETE'
export const SHELVES_FETCH = 'SHELVES_FETCH'


export const AddShelf = shelf => ({
    type: SHELVES_ADD,
    shelf
})

export const UpdateShelf = shelf => ({
    type: SHELVES_UPDATE,
    shelf
})

export const DeleteShelf = shelf => ({
    type: SHELVES_DELETE,
    shelf
})

export const fetchShelves = shelves => ({
    type: SHELVES_FETCH,
    shelves
})