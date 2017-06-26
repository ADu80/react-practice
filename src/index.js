import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HushRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/AppLayout';

const RouteSet = () =>
<HushRouter>
	<Route path="/" component={App}>
	</Route>
</HushRouter>

const render = () => {
    ReactDOM.render(
        <RouteSet />,
        document.getElementById('app')
    )
}

injectTapEventPlugin()
render()
