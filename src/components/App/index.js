import React, { Component } from 'react';
import styles from './index.css';
import SideBar from '../SideBar';
import Page from '../Page';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="container-full">
            <SideBar />
            <Page />
        </article>
        );
    }
}
