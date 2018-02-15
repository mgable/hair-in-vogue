import React from 'react';
import './home.css';
// import './About.css';

class Home extends React.Component{
	render(){
		return (
			<div className="home">
				<div className="row hero-holder">
					<div className="col-sm-12">
						<div className="hero">
							<div className="left">
								<h3 className="tagline">This is the tagline for Hair in Vogue</h3>
								<ul className="call-outs">
									<li><h6>Spicy jalapeno bacon ipsum dolor amet laborum</h6></li>
									<li><h6>Tongue ut capicola chuck ham</h6></li>
									<li><h6>Leberkas chuck frankfurter</h6></li>
									<li><h6>Beef non nulla mollit capicola</h6></li>
									<li><h6>Bresaola turducken in esse jowl</h6></li>
								</ul>
								<button type="button" className="btn btn-secondary btn-lg cta">CALL TO ACTION</button>
							</div>
							<div className="face-pic-fpo"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home