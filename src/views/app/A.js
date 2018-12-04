import React, { Component } from 'react'

import './css.css'

function A(WrappedComponent) {
	return class A extends Component {
		render() {
			return (
				<div className="a-container">
					<div className="header">
						<div>提示</div>
						<div>x</div>
					</div>
					<div>
						这是内容部份
						<WrappedComponent />
					</div>
				</div>
			)
		}
	}
}

export default A
