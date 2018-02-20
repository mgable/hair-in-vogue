import React from 'react';
import './Image.css';

class Image extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="image">
				<div className="image-holder">
					<img src={this.props.image} />
				</div>
			</div>
		)
	}
}

export default Image