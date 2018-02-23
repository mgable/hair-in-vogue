import React from 'react';
import './Image.css';

class Image extends React.Component{
	render(){
		return (
			<div className="image">
				<div className="image-holder">
					<img src={this.props.image} alt="" width={this.props.width}  height={this.props.height} />
				</div>
			</div>
		)
	}
}

export default Image