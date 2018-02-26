import React from 'react';
import "./Quote.css";

class Quote extends React.Component{
	render(){
		return (
			<div className="quote">
				<div className="quote-holder">
					<quote>{this.props.width}</quote>
				</div>
			</div>
		)
	}
}

export default Quote