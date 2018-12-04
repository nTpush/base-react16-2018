import React, { Component } from 'react'

import MenuView from '@/views/main/menu'
import RouterView from '@/views/main/router'

import { Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout

export default class LayoutView extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#FFF' }}>
						{/* <div className="logo">logo</div> */}
						<MenuView />
					</Sider>
					<Layout style={{ marginLeft: 200 }}>
						<Header style={{ background: '#fff', padding: 0 }}>header</Header>
						<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
							<div style={{ padding: 24, background: '#fff', textAlign: 'center', overflow: 'hidden' }}>
								<RouterView />
							</div>
						</Content>
						<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}
