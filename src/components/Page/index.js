import React, { Component } from 'react';
import styles from './index.css';
import TopBar from '../TopBar';
import TabPage from '../TabPage';
import Footer from '../Footer';
import pages from '../../pages';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="page">
    <TopBar />
    <ul className="tab">
        {
            pages.map(el=><TabPage key={el.title} tabTitle={el.title} page={el.page} />)
        }
    </ul>
    <Footer />
</article>);
    }
}
