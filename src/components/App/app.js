import React, { Component } from 'react';
import style from './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
    	return(
    		<div>
                <h1 className={style.title_center}>Levan's React App Demo</h1>
                <h2 className="title">a simple project</h2>
    		</div>
		);
    }
}
