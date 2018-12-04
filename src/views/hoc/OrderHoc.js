import React, { Component } from 'react'

function withOrder(Theme2Item) {
	return class OrderHoc extends Component {
		constructor(props) {
			super(props)
			this.state = {}
		}
		render() {
			const { index, children, ...rest } = this.props
			let newChildren = React.Children.toArray(children)
			newChildren.push(
				<span className="rank" key={Math.random()}>
					{index}
				</span>
			)
			return React.cloneElement(<Theme2Item />, {
				...rest,
				children: newChildren
			})
		}
	}
}
export default withOrder
