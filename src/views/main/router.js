import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Demo from '@/views/main/demo'
import GameInfoHorizontalDisplay from '@/views/hoc/GameInfoHorizontalDisplay'

import A from '@/views/app/A'
import B from '@/views/app/B'
import C from '@/views/app/C'
import F from '@/views/app/F'
import G from '@/views/app/G'
import JdRouter from '@/views/jd/router.js'
import App from '@/views/jd/tarbar/index.js'

const Home = () => <div>home</div>
const Car = () => <div>Car</div>
const List = () => <div>List</div>
const User = () => <div>User</div>

export default class RouterView extends Component {
	render() {
		return (
			<div>
				<Route path="/image" component={Image} />
				<Route path="/file" component={Jd} />
				<Route exact path="/file/home" component={Home} />
				<Route path="/file/car" component={Car} />
				<Route path="/file/list" component={List} />
				<Route path="/file/user" component={User} />
			</div>
		)
	}
}

const data = {
	image: 'https://blog-static-ntpush.oss-cn-beijing.aliyuncs.com/images/background.jpg',
	name: '这是标题',
	alt: '图片解释',
	description: '文字的描述信息',
	index: 2
}
const index = 3
const Image = () => (
	<div>
		<h2>IMAGE</h2>
		<GameInfoHorizontalDisplay gameInfo={data} index={index} />
	</div>
)

const File = () => (
	<div>
		<h2>FILE</h2>
		<B name={'张三'} age={'19'} />
		<hr />
		<C />
		<hr />
		<F />
		<hr />
		<G />
	</div>
)

const Jd = () => (
	<div>
		<JdRouter />
		<App />
	</div>
)
