import React from 'react';
import Center from '../common/Center.js'
import Image from '../common/Image.js'
import Text from '../common/Text.js'
import './home.css';
// import './About.css';

class Home extends React.Component{
	render(){
		return (
			<div className="home container-fluid">
				<div className="row hero-holder">
					<div className="col-sm-12">
						<div className="hero">
							<div className="left">
								<h3 className="tagline">Los Angeles’s Signature<br/>Hair Replacement Boutique</h3>
								<ul className="call-outs">
									<li><h6>Spicy jalapeno bacon ipsum dolor amet laborum</h6></li>
									<li><h6>Tongue ut capicola chuck ham</h6></li>
									<li><h6>Leberkas chuck frankfurter</h6></li>
									<li><h6>Beef non nulla mollit capicola</h6></li>
									<li><h6>Bresaola turducken in esse jowl</h6></li>
								</ul>
								<button type="button" className="btn btn-secondary btn-lg cta">Schedule Appointment</button>
							</div>
						</div>
					</div>
				</div>
				

			</div>
		)
	}
}

export default Home

	
/*
<div className="row">
					<div className="col-sm-12">
						<Center copy="We understand hair is about life’s changes and challenges.</br>It is the most powerful symbol of your SELF.</br>The means by which you communicate (to yourself and others).</br>Who you are and the life you want to live.</br></br>Our mission is to provide quality hairpieces and extensions which give style, beauty and comfort so you can feel your best while engaging in the world around you." cta="BOOK NOW" prehead="OUR MISSION" title="YOU DESERVE TO LIVE YOUR LIFE TO THE FULLEST."></Center>
					</div>
				</div>

				<div className="row with-background">
					<div className="col-sm-12 col-md-6">
						<Image image="img/home/Hair3.jpg" width="585" height="390"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="Whether your hair is straight and flat and in need of some sheen and body, or long and lustrous but hard to manage, we can give you a look you’ll love. Our stylists have years of experience and are certified from some of the top hair schools in the country. We’ll listen to you, work with your ideas, and ensure you love the final results. You’ll notice the difference and feel amazing after an afternoon with Hair in Vogue." prehead="ALL HAIR TYPES" title="LOOKS YOU’LL LOVE"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Text copy="No matter the reason for your hair loss, you shouldn’t be limited to a few looks. We use and customize natural-looking hairpieces for both short- and long-term use. We can also repair or style the hairpiece to your preference and ensure it feels great. We also offer quality extensions, tinting, cuts, and styling. Give yourself a day of fun and relaxation at Hair in Vogue." prehead="CUSTOMIZED HAIRPIECES" title="RELIABLE HAIR TREATMENTS"></Text>
					</div>
					<div className="col-sm-12 col-md-6">
						<Image image="img/home/Hair4.jpg" width="585" height="390"></Image>
					</div>
				</div>
				*/