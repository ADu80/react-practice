import React, { Component } from 'react';
import TabPage from '../../components/TabPage';

export default class Page1 extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <article className="tab-content">
				<p>this is page2</p>
			</article>)
    }
}
