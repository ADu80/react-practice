import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/AppLayout';

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

injectTapEventPlugin();
render();
