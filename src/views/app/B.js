import React, { Component } from 'react'
import A from './A'
import D from './D'

@D
class B extends Component {
	changeInput() {}
	getName() {
		return '我是C组件'
	}
	render() {
		console.log(this.props, 'props')
		return (
			<div>
				<input type="text" {...this.props} />
				<br />
				我的名字是：{this.props.name}
				<br />
				我的年龄是：{this.props.age}
				<br />
				我的性别是：{this.props.sex}
			</div>
		)
	}
}

export default B
