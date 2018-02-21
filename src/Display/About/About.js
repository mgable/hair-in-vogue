import React from 'react';
import Center from '../common/Center.js'
import Image from '../common/Image.js'
import Text from '../common/Text.js'

class About extends React.Component{
	render(){
		return (
			<div className="about">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="As Hollywood’s go-to source for top-quality hairpieces and extensions, our styling team has provided wigs for such popular television shows as Mad Men, Shark, and HBO’s 12 Miles of Bad Road, and has been featured on Your LA. We specialize in integrating the hairpiece or extension so it blends naturally and we have a keen eye for detail. We also offer the finest cuts, tinting, and styling services in the area." cta="BOOK NOW" prehead="WHO WE ARE" cta="SCHEDULE APPOINTMENT" title="LOS ANGELES’S MOST TRUSTED HAIRPIECE EXPERTS"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/585x390/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="We believe the way your hair looks and feels has a huge impact on your self-image. That’s why we use only the finest products and techniques to ensure you love your look. Professionally trained in the Vidal Sassoon academy, Linda Leigh, along with her team of stylists, will treat you with personalized care and attention. We offer quality styling, cuts, and coloring, as well as private consultations and hairpiece customization. You’ll feel confident and attractive when you visit Hair in Vogue." prehead="FINEST PRODUCTS & TECHNIQUES" title="CUSTOM EXTENSIONS, HAIRPIECES &amp; STYLING"></Text>
					</div>
				</div>
			</div>
		)
	}
}

export default About