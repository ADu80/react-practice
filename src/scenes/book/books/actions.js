export var BOOKS_ADD = 'BOOKS_ADD'
export var BOOKS_UPDATE = 'BOOKS_UPDATE'
export var BOOKS_DELETE = 'BOOKS_DELETE'
export var BOOKS_FETCH = 'BOOKS_FETCH'


export var addBook = (book) => {
    return {
        type: BOOKS_ADD,
        book
    }
}

export var updateBook = (book) => {
    return {
        type: BOOKS_UPDATE,
        book
    }
}

export var deleteBook = (book) => {
    return {
        type: BOOKS_DELETE,
        book
    }
}

export var fetchBooks = (books) => {
    return {
        type: BOOKS_FETCH,
        books
    }
}

