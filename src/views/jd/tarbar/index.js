import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
// import '../../../static/iconfont.css'

const tarbarArr = [
	{
		img: 'icon-home',
		text: '首页',
		link: '/file/home'
	},
	{
		img: 'icon-fenlei',
		text: '分类',
		link: '/file/list'
	},
	{
		img: 'icon-car',
		text: '购物车',
		link: '/file/car'
	},
	{
		img: 'icon-yonghu',
		text: '我的',
		link: '/file/user'
	}
]
class Tarbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0
		}
	}
	itemChange = (i) => {
		console.log(i)
		this.setState({
			index: i
		})
	}
	render() {
		return (
			<div className="tarbar">
				{tarbarArr.map((v, i) => (
					<Link
						to={v.link}
						key={i}
						className={'tarbar-item ' + (this.state.index === i ? 'active-click' : '')}
						onClick={() => this.itemChange(i)}
					>
						<div className={'iconfont ' + v.img} />
						<div>{v.text}</div>
					</Link>
				))}
			</div>
		)
	}
}

export default Tarbar
