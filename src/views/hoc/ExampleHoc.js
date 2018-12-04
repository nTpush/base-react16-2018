import React, { Component } from 'react'
const getDisplayName = (component) => {
	return component.displayName || component.name || 'Component'
}

const ExampleHoc = (title) => (WrappedComponent) => {
	return class extends Component {
		static displayName = `ExampleHoc(${getDisplayName(WrappedComponent)})`
		render() {
			const newProps = {
				id: Math.random().toString(36).substring(2).toUpperCase()
			}
			return (
				<div>
					<h1 className="demo-header">{title}</h1>
					<WrappedComponent {...this.props} {...newProps} />
				</div>
			)
		}
	}
}

export default ExampleHoc
