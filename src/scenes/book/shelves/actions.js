export var Shelves_ADD = 'Shelves_ADD';
export var Shelves_UPDATE = 'Shelves_UPDATE';
export var Shelves_DELETE = 'Shelves_DELETE';
export var Shelves_DOWNLOAD = 'Shelves_DOWNLOAD';


export var AddShelf = (Shelf) => {
    return {
        type: Shelves_ADD,
        Shelf
    }
}

export var UpdateShelf = (Shelf) => {
    return {
        type: Shelves_UPDATE,
        Shelf
    }
}

export var DeleteShelf = (Shelf) => {
    return {
        type: Shelves_DELETE,
        Shelf
    }
}

export var DownloadShelves = (Shelves) => {
    return {
        type: Shelves_ADD,
        Shelves
    }
}

export default { AddShelf, UpdateShelf, DeleteShelf, DownloadShelves }
