import React from 'react';
import Center from '../common/Center.js'
import Image from '../common/Image.js'
import Text from '../common/Text.js'

class Services extends React.Component{
	render(){
		return (
			<div className="services">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="At Hair in Vogue, we are known for our salon services. Offering both classic and creative hair solutions, our stylists can replicate almost any look and ensure your hair feels lustrous and amazing. Our salon services include:" cta="CALL TODAY" prehead="CREATIVE HAIR SOLUTION" title="HAIR SALON SERVICES"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Text copy='<h6 class="prehead">Women</h6><ul><li>Cuts, styling, and blow dry</li><li>Shampoo</li><li>Flat iron</li><li>Tints (both root touch-ups and all over)</li><li>Highlights/weaves</li><li>Lowlights and corrective coloring</li><li>Bleach and toner</li></ul><h6 class="prehead">Men</h6><ul><li>Cut and styling</li><li>Tints and highlights</li></ul><h6 class="prehead">Other Treatments</h6><ul><li>Perms</li><li>Gloss and conditioners</li><li>YUKO hair straightening</li><li>Brazilian hair straightening</li><li>Relaxers</li><li>and more</li></ul><p>We’ll work with you to ensure your hair is radiant and you look fantastic. Call us today to schedule an appointment.</p>'></Text>
					</div>
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/427x640/000/fff"></Image>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy="We take great care in selecting the best method for attaching your hairpiece or extension, from microcylinders and various glues to braiding, sewing, pole weaving, clips, and tape. We’ll find the most natural, secure way to include your hair extension, weave, or hairpiece and ensure it’s both comfortable and reliable for use. Our hair replacement services include:"  prehead="COMFORTABLE &amp; RELIABLE" title="HAIR REPLACEMENT SERVICES"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="<h6>Extension services</h6><ul><li>Attach weft and individuals</li><li>Glue tip individuals</li><li>Cut and coloring extensions</li><li>Re-tipping</li></ul><h6>Hairpiece services</h6><ul><li>Attach hairpieces: full, three-quarters, top</li><li>Cut and coloring</li><li>Repairs (adding, removing, reinforcing base, highlights, and resizing cap or base)/li><li>We also offer home visits for medically related hair loss.</li><li>Customizing</li></ul>" cta="CONTACT US TODAY"  title="WHAT WE OFFER"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy="We’re committed to providing exceptional hair solutions regardless of your hair’s condition. We’ll listen to your needs and strive to exceed your expectations. We’re happy to oblige special requests, and if you suffer from medically related hair loss, we can arrange a home visit. For customized hairpieces and styling, there’s no better choice than Hair in Vogue."  prehead="EXCEED YOUR EXPECTATIONS" title="OUR COMMITMENT TO YOU"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center cta="(424) 281-6329"  prehead="SCHEDULE TODAY" title="CALL US TODAY TO SCHEDULE AN APPOINTMENT."></Center>
					</div>
				</div>

			</div>
		)
	}
}

export default Services