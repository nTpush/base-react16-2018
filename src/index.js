import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//redux处理异步
import thunk from 'redux-thunk'
//优雅的连接react和redux
import { Provider } from 'react-redux'
//applyMiddleware：中间件，compose：组合函数
import { createStore, applyMiddleware, compose } from 'redux'

import App from './App'
import LayoutView from '@/views/main/layout'
import reducer from '@/redux/reducer'
import * as serviceWorker from './serviceWorker'

//判断redux调式工具是否存在
let reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : (f) => f
const store = createStore(reducer, compose(applyMiddleware(thunk), reduxDevtools))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<LayoutView />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
