import React from 'react';
import Image from '../common/Image.js';
import Text from '../common/Text.js';
import Quote from '../common/Quote.js';
import './Contact.css'

class Contact extends React.Component{
	render(){
		return (
			<div className="contact container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy='<form name="contact"><div class="form-row"><div class="form-group col-md-6"><label>First Name</label><input class="form-control" name="first_name" type="text" required/></div><div class="form-group col-md-6"><label>Last Name</label><input class="form-control" name="last_name" type="text" required/></div></div><div class="form-row"><div class="form-group col-md-6"><label>Email</label><input class="form-control" name="last_name" type="email" required/></div><div class="form-group col-md-6"><label>Phone</label><input class="form-control" name="last_name" type="phone" required/></div></div><div class="form-group"><label>Message</label><textarea style="min-width: 100%" class="form-control"></textarea></div><div class="form-group"> <button type="submit" class="btn btn-primary">Submit</button></div></form>' prehead="GET A CONSULTATION" title="CONTACT US"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Quote quote="I have been through chemo which caused my hair to thin. I thought I would have to get a wig but after the consultation decided on an integration piece. I was impressed with the amount of time Linda spent with me, creating the design. It was obvious she knows what she is doing and cares. She is sincere, professional and very accommodating. I am very happy with my choice – it feels like me, a part of myself. I receive compliments all the time. I highly recommend Hair In Vogue to others in my situation." attribution="Susan L."></Quote>
					</div>
				</div>

				<div className="row with-background">
					<div className="col-sm-12 col-md-6">
						<Text copy="<div className='tileframe'><p>Hair in Vogue is conveniently located at:</p><address>11950 San Vicente Blvd.<br/>Brentwood CA 90049<br/>424-281-6329</address><div className='tile'><b>Directions from west of Bundy:</b><ul><li>Take San Vicente Blvd. go east</li><li>to Bundy - right</li><li>travel ¼ block on Bundy - turn left into alley</li><li>follow alley to end</li><li>turn left into 11950's parking lot</li></ul></div><div className='tile'><b>Directions from east of Bundy:</b><ul><li>Take San Vicente Blvd. go west</li><li>to Bundy - left</li><li>travel ¼ block on Bundy - turn left into alley</li><li>follow alley to end</li><li>turn left into 11950's parking lot</li></ul></div><p>Look for <b>Hair in Vogue</b> Reserved Parking signs to your right</p><p>FREE PARKING</p></div>" prehead="Our Location" title="How to find us"></Text>
					</div>
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact