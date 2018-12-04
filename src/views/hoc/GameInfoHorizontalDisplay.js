import React, { Component } from 'react'
import withOrder from './OrderHoc'
import './order.css'

@withOrder
class GameInfoHorizontalDisplay extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { gameInfo, children } = this.props
		console.log(this.props, 'propsorder')
		return (
			<div className="gameInfoHorizontalDisplay">
				{children}
				<div className="imageBox">
					<img src={gameInfo.image || gameInfo.icon} alt={gameInfo.alt} />
				</div>

				<div className="wordBox">
					<h3 className="top">{gameInfo.name}</h3>
					<div className="middle">
						{gameInfo.labelList &&
							gameInfo.labelList.map((label) => (
								<span
									className="label"
									key={'label' + label.name}
									style={{ backgroundColor: label.color || '#07b3ef' }}
								>
									{label.name}
								</span>
							))}
					</div>
					<p className="button">{gameInfo.description}</p>
				</div>
			</div>
		)
	}
}
export default GameInfoHorizontalDisplay
