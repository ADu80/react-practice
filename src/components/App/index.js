import React, { Component } from 'react';
import style from './index.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="row">
                <section className="col-md-3 border-right">col-md-3</section>
                <section className="col-md-9">
                    <h1 className="title">a simple project</h1>
                </section>
            </article>
        );
    }
}
