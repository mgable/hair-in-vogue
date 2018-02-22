import React from 'react';
import Image from '../common/Image.js'
import Text from '../common/Text.js'
// import './About.css';

class Contact extends React.Component{
	render(){
		return (
			<div className="services">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy='<form name="contact"><div class="form-row"><div class="form-group col-md-6"><label>First Name</label><input class="form-control" name="first_name" type="text" required/></div><div class="form-group col-md-6"><label>Last Name</label><input class="form-control" name="last_name" type="text" required/></div></div><div class="form-row"><div class="form-group col-md-6"><label>Email</label><input class="form-control" name="last_name" type="email" required/></div><div class="form-group col-md-6"><label>Phone</label><input class="form-control" name="last_name" type="phone" required/></div></div><div class="form-group"><label>Message</label><textarea style="min-width: 100%" class="form-control"></textarea></div><div class="form-group"> <button type="submit" class="btn btn-primary">Submit</button></div></form>' prehead="GET A CONSULTATION" title="CONTACT US"></Text>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact