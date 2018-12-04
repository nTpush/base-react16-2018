import React from 'react'
const modifyPropsHOC = (wrappedComponent) =>
	class NewComponent extends wrappedComponent {
		static displayName = `NewComponent(${displayName(wrappedComponent)})`
		componentWillMount() {
			console.log('修改原始生命周期')
		}
		render() {
			const element = super.render()
			const newStyle = {
				color: element.type === 'div' ? 'red' : 'green'
			}
			const newProps = { ...this.props, style: newStyle }
			return React.cloneElement(element, newProps, element.props.children)
		}
	}

function displayName(wrappedComponent) {
	return wrappedComponent.displayName || wrappedComponent.name || 'Component'
}

export default modifyPropsHOC
