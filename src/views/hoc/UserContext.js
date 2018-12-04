import React, { Component } from 'react'
import ExampleHoc from './ExampleHoc'

@ExampleHoc('标题')
class UserContext extends Component {
	render() {
		console.log('props', this.props, 'hoc')
		return (
			<div>
				{this.props.title} - {this.props.name}
			</div>
		)
	}
}

export default UserContext
