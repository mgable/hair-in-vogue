import React from 'react';
import './home.css';
// import './About.css';

class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<div className="row hero-holder">
					<div className="col-sm-12">
						<div className="hero"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home