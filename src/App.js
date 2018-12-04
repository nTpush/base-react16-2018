import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Button } from 'antd'

import { addGunAsync, addGun } from '@/redux/modules/test.redux'

@connect((state) => ({ num: state }), { addGun, addGunAsync })
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		console.log(this.props)
		const addGun = this.props.addGun
		const addGunAsync = this.props.addGunAsync
		return (
			<div className="App">
				<span>{this.props.num.Test}</span>
				<Button type="primary" onClick={() => addGunAsync()}>
					Button
				</Button>
				<Button type="primary" onClick={() => addGun()}>
					Button
				</Button>
			</div>
		)
	}
}

export default App
