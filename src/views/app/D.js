import React, { Component } from 'react'
function d(WrappedComponent) {
	return class D extends Component {
		constructor(props) {
			super(props)
			this.state = {
				value: ''
			}
		}
		refc(instance) {
			instance && console.log(instance.getName(), '999')
		}

		onInputChange = (e) => {
			this.setState({
				value: e.target.value
			})
		}

		render() {
			const { age, ...oterProps } = this.props
			const newProps = {
				value: this.state.value,
				onChange: this.onInputChange
			}
			return (
				<div>
					我是高阶组件D
					<WrappedComponent sex={'男'} {...oterProps} {...newProps} ref={this.refc.bind(this)} />
				</div>
			)
		}
	}
}
export default d
