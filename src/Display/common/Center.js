import React from 'react';
import './Center.css';

class Center extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="center">
				<h3>{this.props.prehead}</h3> 
				<h1>{this.props.title}</h1>
				<p dangerouslySetInnerHTML={{__html: this.props.copy}}></p>

				<button type="button" className="btn btn-secondary btn-lg cta">{this.props.cta}</button> 
			</div>
		)
	}
}

export default Center