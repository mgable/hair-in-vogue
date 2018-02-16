import React from 'react';
import Center from '../common/Center.js'
import Right from '../common/Right.js'
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
				<div className="col-sm-12">
					<Center copy="We understand hair is about life’s changes and challenges.</br>It is the most powerful symbol of your SELF.</br>The means by which you communicate (to yourself and others).</br>Who you are and the life you want to live.</br></br>Our mission is to provide quality hairpieces and extensions which give style, beauty and comfort so you can feel your best while engaging in the world around you." cta="BOOK NOW" prehead="OUR MISSION" title="YOU DESERVE TO LIVE YOUR LIFE TO THE FULLEST."></Center>
				</div>

				<div className="col-sm-12">
					<Right image="https://dummyimage.com/470x313/000/fff" copy="Whether your hair is straight and flat and in need of some sheen and body, or long and lustrous but hard to manage, we can give you a look you’ll love. Our stylists have years of experience and are certified from some of the top hair schools in the country. We’ll listen to you, work with your ideas, and ensure you love the final results. You’ll notice the difference and feel amazing after an afternoon with Hair in Vogue." prehead="ALL HAIR TYPES" title="LOOKS YOU’LL LOVE"></Right>
				</div>
			</div>
		)
	}
}

export default Home

	
