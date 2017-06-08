import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './components/App';
import store from './stores';


const RouteSet = () =>
    <HashRouter>
	<Route path="/" component={App} />
</HashRouter>

const render = () => {
    ReactDOM.render(
        <RouteSet />,
        document.getElementById('app')
    );
}

render();
store.subscribe(render);
