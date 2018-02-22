import React from 'react';
import Center from '../common/Center.js';
import Text from '../common/Text.js';
import Image from '../common/Image.js';

class Linda extends React.Component{
	render(){
		return (
			<div className="linda">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="As Hollywood’s go-to source for top-quality hairpieces and extensions, our styling team has provided wigs for such popular television shows as Mad Men, Shark, and HBO’s 12 Miles of Bad Road, and has been featured on Your LA. We specialize in integrating the hairpiece or extension so it blends naturally and we have a keen eye for detail. We also offer the finest cuts, tinting, and styling services in the area."  prehead="OWNER OF HAIR IN VOGUE" title="LINDA LEIGH"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/585x390/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="Linda’s signature hairpieces have been used in such TV productions as Mad Men and featured on KTLA’s Morning Show and Your LA. Linda is a regular contributor to style magazines such as First for Women, Life and Style, and Woman’s World, and can expertly attach any hairpiece or extension — no matter the condition of the client’s hair. At Hair in Vogue, we’ll listen to you and create a beautiful hair solution you’ll love. We offer private consultations and we’re happy to oblige special requests." prehead="SIGNATURE HAIRPIECES" title="STYLING AND HAIRPIECE EXPERTISE"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Text copy="Early in her career, Linda was diagnosed with alopecia areata, which can cause severe hair loss. Through this experience, she came to understand the needs of those who receive chemotherapy and lose hair due to medications and medical treatments. Since this time, Linda has worked to understand how to best replace hair with natural-looking, fully functional hairpieces, extensions, and hair styling. Linda also volunteers a portion of her time cutting wigs at the City of Hope, and is happy to accommodate any cancer patient with a private, in-home consultation. Contact us today to schedule an appointment." prehead="PRIVATE CONSULTATIONS" title="MEETING THE NEEDS OF THOSE WITH HAIR LOSS"></Text>
					</div>
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/585x390/000/fff"></Image>
					</div>
				</div>
			</div>
		)
	}
}

export default Linda