import React from 'react';
import "./Quote.css";

class Quote extends React.Component{
	render(){
		return (
			<div className="quote">
				<div className="quote-holder">
					<blockquote>{this.props.quote}</blockquote>
					<p className="attribution">{this.props.attribution}</p>
				</div>
			</div>
		)
	}
}

export default Quote