import React, { Component } from 'react'

export default class Demo extends Component {
	render() {
		console.log(this.props.match)
		return <div>Demo</div>
	}
}
