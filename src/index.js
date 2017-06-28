import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import stores from './stores';
import App from './components/AppLayout';

const RouteSet = () =>
<BrowserRouter>
	<Route path="/" component={App}>
	</Route>
</BrowserRouter>

const render = () => {
    ReactDOM.render(
        <RouteSet />,
        document.getElementById('app')
    )
}

injectTapEventPlugin()
render()
stores.subscribe(render);
