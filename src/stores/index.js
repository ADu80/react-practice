import { createStore } from 'redux';

var books = [
    { id: 'b0001', name: 'C++ MFC', price: 50 },
    { id: 'b0002', name: 'ASP.NET MVC', price: 50 },
    { id: 'b0003', name: 'Javascript High Design', price: 50 },
    { id: 'b0004', name: 'Nodejs', price: 50 },
    { id: 'b0005', name: 'MongoDB', price: 50 },
    { id: 'b0006', name: 'React & Redux', price: 50 },
    { id: 'b0007', name: 'Responsive Web Design', price: 50 },
    { id: 'b0008', name: 'How to write js', price: 50 },
    { id: 'b0009', name: 'Functional js', price: 50 },
    { id: 'b0010', name: 'C# deepin', price: 50 }
];

const reducer = (state = books, action) => {
    switch (action.type) {
        case 'BOOKS_ADD':
            return [...state, {}];
        case 'BOOKS_UPDATE':
            var bs = state.slice(),
                b = bs.find(el => (el.id === action.book.id));
            b.price += 100;
            return bs;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
