import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/AppLayout';

const RouteSet = () =>
<BrowserRouter>
	<article>
		<Route path="/" component={App}>
		</Route>
	</article>
</BrowserRouter>

const render = () => {
    ReactDOM.render(
        <RouteSet />,
        document.getElementById('app')
    )
}

injectTapEventPlugin()
render()
