export const BOOKS_ADD = 'BOOKS_ADD'
export const BOOKS_UPDATE = 'BOOKS_UPDATE'
export const BOOKS_DELETE = 'BOOKS_DELETE'
export const BOOKS_FETCH = 'BOOKS_FETCH'


export const addBook = book => ({
    type: BOOKS_ADD,
    book
})

export const updateBook = book => ({
    type: BOOKS_UPDATE,
    book
})

export const deleteBook = book => ({
    type: BOOKS_DELETE,
    book
})

export const fetchBooks = books => ({
    type: BOOKS_FETCH,
    books
})