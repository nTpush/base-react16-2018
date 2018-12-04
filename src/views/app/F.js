import React, { Component } from 'react'
import E from './E'

@E
class F extends Component {
	componentWillMount() {
		console.log('原始生命周期')
	}
	render() {
		return (
			<div>
				<div>divdiv</div>
			</div>
		)
	}
}

export default F
