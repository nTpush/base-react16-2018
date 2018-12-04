import React, { Component } from 'react'
import A from './A'

@A
class C extends Component {
	getName() {
		return '我是C组件'
	}
	render() {
		return <div>C</div>
	}
}

export default C
