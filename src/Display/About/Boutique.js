import React from 'react';
import Center from '../common/Center.js';
import Text from '../common/Text.js';
import Image from '../common/Image.js';
import './Boutique.css';

class Boutique extends React.Component{
	render(){
		return (
			<div className="boutique">
				<div className="row with-background">
					<div className="col-sm-12">
						<Center copy="<p>Hair in Vogue has been Brentwood’s choice hair salon for years. Our stylists have won acclaim both locally and on TV for their hairpiece customization and extension work. Owner Linda Leigh was professionally trained with Vidal Sassoon and brings her expertise to every client. We specialize in high-quality salon styling, cuts, and coloring, as well as extensions and custom hairpieces.</p><p>By appointment only.</p>"  prehead="Los Angeles’s Premier Hair Boutique" title="BRENTWOOD’S CHOICE SALON" cta="CALL US NOW"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/585x390/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="Our salon offers a warm, inviting, and intimate atmosphere that will make you feel at ease as we reinvigorate your look. We can expertly color match, tint, and style your hair while you relax and enjoy the treatment. We offer private consultations for free, and home visits for those clients needing hairpieces for medical issues. We’ll help you love the way you look again!" prehead="LOVE THE WAY YOU LOOK" title="INTIMATE SETTING, EXPERT STYLING"></Text>
					</div>
				</div>
			</div>
		)
	}
}

export default Boutique