export var BOOKS_ADD = 'BOOKS_ADD';
export var BOOKS_UPDATE = 'BOOKS_UPDATE';
export var BOOKS_DELETE = 'BOOKS_DELETE';
export var BOOKS_DOWNLOAD = 'BOOKS_DOWNLOAD';


export var AddBook = (book) => {
    return {
        type: BOOKS_ADD,
        book
    }
}

export var UpdateBook = (book) => {
    return {
        type: BOOKS_UPDATE,
        book
    }
}

export var DeleteBook = (book) => {
    return {
        type: BOOKS_DELETE,
        book
    }
}

export var DownloadBooks = (books) => {
    return {
        type: BOOKS_ADD,
        books
    }
}

export default { AddBook, UpdateBook, DeleteBook, DownloadBooks }
