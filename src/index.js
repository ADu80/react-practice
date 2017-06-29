import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/AppLayout'
import { Provider } from 'react-redux'
import store from './store'


const render = () => {
    ReactDOM.render(
        <Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}>
			</Route>
		</BrowserRouter>
		</Provider>,
        document.getElementById('app')
    )
}

injectTapEventPlugin()
render()
