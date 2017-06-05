import React, { Component } from 'react';
import style from './index.css';

const books = ['js high design', 'asp.net core', 'php program'];

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
    		{books.map(el=><li>{el}<li>)}
    		</ul>
        );
    }
}
