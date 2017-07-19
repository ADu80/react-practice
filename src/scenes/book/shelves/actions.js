export var SHELVES_ADD = 'SHELVES_ADD'
export var SHELVES_UPDATE = 'SHELVES_UPDATE'
export var SHELVES_DELETE = 'SHELVES_DELETE'
export var SHELVES_DOWNLOAD = 'SHELVES_DOWNLOAD'


export var AddShelf = (shelf) => {
    return {
        type: SHELVES_ADD,
        shelf
    }
}

export var UpdateShelf = (shelf) => {
    return {
        type: SHELVES_UPDATE,
        shelf
    }
}

export var DeleteShelf = (shelf) => {
    return {
        type: SHELVES_DELETE,
        shelf
    }
}

export var DownloadShelves = (shelves) => {
    return {
        type: SHELVES_DOWNLOAD,
        shelves
    }
}

