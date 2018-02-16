import React from 'react';

class Base extends React.Component{
	render(){
		var cta = null;

		if (this.props.cta) {
			cta = <button type="button" className="btn btn-secondary btn-lg cta">{this.props.cta}</button> 
		}

		return (
			<div className="Base">
				<div className="image-holder">
					<img src={this.props.image} />
				</div>
				<div className="text-holder">
					<h3>{this.props.prehead}</h3> 
					<h1>{this.props.title}</h1>
					<p dangerouslySetInnerHTML={{__html: this.props.copy}}></p>
					{cta}
				</div>
			</div>
		)
	}
}

export default Base

