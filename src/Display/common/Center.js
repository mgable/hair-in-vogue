import React from 'react';
import './Center.css';

class Center extends React.Component{
	render(){
		var cta = null;
		if (this.props.cta){
			cta = <button type="button" className="btn btn-secondary btn-lg cta">{this.props.cta}</button> 
		}
		return (
			<div className="center">
				<h3>{this.props.prehead}</h3> 
				<h1>{this.props.title}</h1>
				<div dangerouslySetInnerHTML={{__html: this.props.copy}}></div>

				{cta}
			</div>
		)
	}
}

export default Center