import React, { Component } from 'react'
import E from './E'

@E
class G extends Component {
	componentWillMount() {
		console.log('原始生命周期')
	}
	render() {
		return <p>pppppp</p>
	}
}

export default G
