import React from 'react';
import Center from '../common/Center.js';
import Image from '../common/Image.js';
import Text from '../common/Text.js';
import Quote from '../common/Quote.js';
import './Products.css';

class Products extends React.Component{
	render(){
		return (
			<div className="products container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>We take pride in offering comfortable and natural-looking hairpieces that will match the color and texture of your hair perfectly. We can customize your hairpiece to look right for your age and ensure it has both a firm fit and natural movement. We also provide coloring and cuts for each hairpiece to complement your skin tone, face shape, and ethnicity. When you need a quality customized hair replacement, Hair in Vogue is your best choice.</p>" prehead="COMFORTABLE &amp; NATURAL" title="CUSTOMIZATION IS OUR SPECIALTY"></Center>
					</div>
				</div>


				<div className="row with-background">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/585x390/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="Whether you’re enjoying a leisurely day at home or are out and about, we understand your hairpiece should sit snugly and feel natural. Our team of professional hairpiece stylists knows how to best attach your hairpiece for both stability and comfort. We offer hairpieces for clients dealing with long-term medical hair loss and short-term hair loss, or those who are in need of a fun style change-up." prehead="PROFESSIONAL HAIRPIECE STYLISTS" title="DESIGNED FOR YOUR LIFE"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Quote quote="Linda is a complete artist. The way she transformed my hair is like magic. I went in with little hair and a few hours later I look beautiful. I am so happy. The hair – it is soft and luxurious, looks healthy and very natural. It is great to have everything done in one place: cut, color, hairpiece, extension. I used to have to drive all over town. I love the cut. I get compliments on my hair wherever I go. Without the hair I would be lost. She is the best." attribution="Fina S" ></Quote>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy="<p>Our custom hairpieces can be worn on the scalp, over existing hair, or integrated with your hair. We offer styling, cuts, coloring, and tinting services, as well as attaching, resizing, and base repairs for all our hairpieces. Our premium quality pieces are designed to last for years with proper care. We also offer more affordable hairpieces for short-term use. When you need comprehensive hairpiece servicing and treatments, contact us to schedule an appointment.</p>" prehead="COMPREHENSIVE HAIRPIECE SERVICING" title="COMPREHENSIVE HAIRPIECE SERVICES"></Center>
					</div>
				</div>

				<div className="row with-background-odd">
					<div className="col-sm-12">
						<Center cta="(424) 281-6329" prehead="GET IN TOUCH" title="CALL OUR HAIR SALON TODAY TO SCHEDULE AN APPOINTMENT!"></Center>
					</div>
				</div>

			</div>
		)
	}
}

export default Products