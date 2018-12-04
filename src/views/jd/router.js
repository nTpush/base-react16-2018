import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => <div>home</div>
const Car = () => <div>Car</div>
const List = () => <div>List</div>
const User = () => <div>User</div>
export default class JdRouter extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch />
				</BrowserRouter>
			</div>
		)
	}
}
