import React from 'react';
import Center from '../common/Center.js';
import Image from '../common/Image.js';
import Text from '../common/Text.js';
import Quote from '../common/Quote.js';
import './home.css';
// import './About.css';

class Home extends React.Component{
	render(){
		return (
			<div className="home container-fluid">
				<div className="row hero-holder">
					<div className="stretch">
						<div className="hero">
							<div className="left">
								<h3 className="tagline">Los Angeles’s Signature<br/>Hair Replacement Boutique</h3>
								<ul className="call-outs">
									<li><h6>Full service hair salon</h6></li>
									<li><h6>Custom made hair extensions</h6></li>
									<li><h6>Custom made hair pieces</h6></li>
									<li><h6>Medical hair loss solutions</h6></li>
									<li><h6>Free Consultation</h6></li>
								</ul>
								<button type="button" className="btn btn-secondary btn-lg cta">Schedule Appointment</button>
							</div>
						</div>
						<div className="hero-mobile">
							<div className="mobile-hero-holder">&nbsp;</div>
							<h3 className="tagline">Los Angeles’s<br/>Signature Hair<br/>Replacement<br/>Boutique</h3>
							<div className="left">
								<ul className="call-outs">
									<li><h6>Full service hair salon</h6></li>
									<li><h6>Custom made hair extensions</h6></li>
									<li><h6>Custom made hair pieces</h6></li>
									<li><h6>Medical hair loss solutions</h6></li>
									<li><h6>Free Consultation</h6></li>
								</ul>
								<button type="button" className="btn btn-secondary btn-lg cta">Schedule Appointment</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>We understand hair is about life’s changes and challenges.</p><p>It is the most powerful symbol of your SELF.</p><p>The means by which you communicate (to yourself and others).</br>Who you are and the life you want to live.</p><p>Our mission is to provide quality hairpieces and extensions which give style, beauty and comfort so you can feel your best while engaging in the world around you.</p>" cta="BOOK NOW" prehead="OUR MISSION" title="YOU DESERVE TO LIVE YOUR LIFE TO THE FULLEST."></Center>
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
					<div className="col-sm-12">
						<Quote quote="Love this salon! Linda does amazing work and truly is an artist in everything she does. This salon is the best of the west side. I love this place." attribution="Brooke H."></Quote>
					</div>
				</div>

				<div className="row with-background-odd">
					<div className="col-sm-12 col-md-6">
						<Text copy="No matter the reason for your hair loss, you shouldn’t be limited to a few looks. We use and customize natural-looking hairpieces for both short- and long-term use. We can also repair or style the hairpiece to your preference and ensure it feels great. We also offer quality extensions, tinting, cuts, and styling. Give yourself a day of fun and relaxation at Hair in Vogue." prehead="CUSTOMIZED HAIRPIECES" title="RELIABLE HAIR TREATMENTS"></Text>
					</div>
					<div className="col-sm-12 col-md-6">
						<Image image="img/home/Hair4.jpg" width="585" height="390"></Image>
					</div>
				</div>

			</div>
		)
	}
}

export default Home