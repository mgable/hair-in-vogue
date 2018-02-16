import React from 'react';
import Base from './Base.js'
import "./Right.css"

class Right extends React.Component{
	render(){

		return (
			<div className="right">
				<Base copy={this.props.copy} cta={this.props.cta} prehead={this.props.prehead} title={this.props.title} image={this.props.image}></Base>
			</div>
		)
	}
}

export default Right

