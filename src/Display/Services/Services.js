import React from 'react';
import Center from '../common/Center.js';
import Image from '../common/Image.js';
import Text from '../common/Text.js';
import Quote from '../common/Quote.js';
import './Services.css';

class Services extends React.Component{
	render(){
		return (
			<div className="services">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>At Hair in Vogue, we are known for our salon services. Offering both classic and creative hair solutions, our stylists can replicate almost any look and ensure your hair feels lustrous and amazing.</p>" cta="CALL TODAY" prehead="CREATIVE HAIR SOLUTION" title="HAIR SALON SERVICES"></Center>
					</div>
				</div>

				<div className="row with-background">
					<div className="col-sm-12 col-md-6">
						<Text copy='<h6 class="prehead">Women</h6><ul><li>Cuts, styling, and blow dry</li><li>Shampoo</li><li>Flat iron</li><li>Tints (both root touch-ups and all over)</li><li>Highlights/weaves</li><li>Lowlights and corrective coloring</li><li>Bleach and toner</li></ul><h6 class="prehead">Men</h6><ul><li>Cut and styling</li><li>Tints and highlights</li></ul><h6 class="prehead">Other Treatments</h6><ul><li>Perms</li><li>Gloss and conditioners</li><li>YUKO hair straightening</li><li>Brazilian hair straightening</li><li>Relaxers</li><li>and more</li></ul><p>We’ll work with you to ensure your hair is radiant and you look fantastic. Call us today to schedule an appointment.</p>' title='Our salon services include:'></Text>
					</div>
					<div className="col-sm-12 col-md-6 displayFlex">
						<Image image="https://dummyimage.com/427x640/000/fff"></Image>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Quote quote="I purchased a wig which is absolutely gorgeous. My boyfriend was stunned how natural it looks. The scalp looks totally real and the color is amazing. It is a darker color at the roots and transitions into golden silky hair. I like the way the hair moves when I turn my head and love the cut. Of course I like looking younger too!" attribution="Ann H."></Quote>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>We take great care in selecting the best method for attaching your hairpiece or extension, from microcylinders and various glues to braiding, sewing, pole weaving, clips, and tape. We’ll find the most natural, secure way to include your hair extension, weave, or hairpiece and ensure it’s both comfortable and reliable for use. Our hair replacement services include:</p>"  prehead="COMFORTABLE &amp; RELIABLE" title="HAIR REPLACEMENT SERVICES"></Center>
					</div>
				</div>

				<div className="row with-background-odd">
					<div className="col-sm-12 col-md-6 displayFlex">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="<h6>Extension services</h6><ul><li>Attach weft and individuals</li><li>Glue tip individuals</li><li>Cut and coloring extensions</li><li>Re-tipping</li></ul><h6>Hairpiece services</h6><ul><li>Attach hairpieces: full, three-quarters, top</li><li>Cut and coloring</li><li>Repairs (adding, removing, reinforcing base, highlights, and resizing cap or base)</li><li>We also offer home visits for medically related hair loss.</li><li>Customizing</li></ul>" cta="CONTACT US TODAY"  title="WHAT WE OFFER"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>Linda Leigh has served the needs of clients with medically related hair loss for years. From her own personal journey dealing with alopecia to volunteering with cancer patients at the City of Hope, she’s gained a keen understanding of what current treatments and medications can do to your hair and how best to address hair loss. At Hair in Vogue, we specialize in creating beautiful and natural custom hairpieces and extensions that will feel right and look amazing. No matter your need, we’ll listen to you and ensure you feel confident and beautiful.</p>"  prehead="UNDERSTANDING YOUR NEEDS" title="MEDICAL SOLUTIONS" cta="CONTACT US TODAY"></Center>
					</div>
				</div>

				<div className="row with-background-even">
					<div className="col-sm-12">
						<Center copy="<p>We’re committed to providing exceptional hair solutions regardless of your hair’s condition. We’ll listen to your needs and strive to exceed your expectations. We’re happy to oblige special requests, and if you suffer from medically related hair loss, we can arrange a home visit. For customized hairpieces and styling, there’s no better choice than Hair in Vogue.</p>"  prehead="EXCEED YOUR EXPECTATIONS" title="OUR COMMITMENT TO YOU"></Center>
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