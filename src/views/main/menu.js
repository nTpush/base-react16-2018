import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
// 获取history对象
import PropTypes from 'prop-types'
@connect((state) => ({ baseConfig: state.baseConfig.menu }))
class MenuView extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}
	handleClick = (e) => {
		console.log('click ', e)
	}

	componentDidMount() {
		// console.log(this.context.router.history.path, 'p3')
	}

	render() {
		const nowMenuIndex = this.context.router.history.location.pathname
		const MenuItemGroup = Menu.ItemGroup
		const _theme = this.props.baseConfig.theme
		const _menus = this.props.baseConfig.lists
		return (
			<div>
				<Menu onClick={this.handleClick} defaultSelectedKeys={[ nowMenuIndex ]} mode="inline" theme={_theme}>
					{_menus.map((menu) => {
						return (
							<MenuItemGroup key={menu.id} title={menu.name}>
								{menu.children.map((item) => {
									return (
										<Menu.Item key={item.path}>
											<Link to={item.path}>
												<Icon type={item.type} theme="twoTone" />
												{item.name}
											</Link>
										</Menu.Item>
									)
								})}
							</MenuItemGroup>
						)
					})}
				</Menu>
			</div>
		)
	}
}

export default MenuView
