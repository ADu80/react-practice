import React, { Component } from 'react';
import styles from './index.css';

import { Route } from 'react-router';
import { FadeIn } from 'react-router-dom';

export default class TabPage extends Component {
    constructor(props) {
        super(props);
        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange() {
        console.log('onchanged');
    }

    render() {
        var titleCheckId = 'tab-title-check-' + this.props.title;
        return (
            <li className="tab-page">
            <Route path={this.props.path} 
                        render={()=>
                            <article>
                                <input className="tab-title-check" id={titleCheckId} type="radio" name="page" onChange={this.onTabChange} checked />
                                <label className="tab-title" htmlFor={titleCheckId}>{this.props.title}</label>
                                {this.props.children()}
                            </article>
                        }
                    />
            </li>
        )
    }
}
