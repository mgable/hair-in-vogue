import React from 'react';
import Center from '../common/Center.js'
import Image from '../common/Image.js'
import Text from '../common/Text.js'
import Quote from '../common/Quote.js'
import './Kudos.css';

class Kudos extends React.Component{
	render(){
		return (
			<div className="kudos">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="<h6>Linda Leigh has designed and created extensions and hair pieces for the following shows and others:</h6><ul><li>AMC “Madmen” – designed hairpiece for lead actress Christina Henke, playing Joan</li><li>“Shark” – designed extensions for lead actress Jeri Ryan</li><li>HBO “12 Miles of Bad Road” – designed extensions for lead actress</li><li>“The 19th Wife” – designed extensions for actress, Tyler Leigh</li></ul>"  prehead="CREDIT &amp; PRESS RELEASES" title="CREDITS: FILM &amp; TV"></Center>
					</div>
				</div>

				<div className="row with-background">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="<h6>Linda Leigh has contributed to the following magazines:</h6><ul><li><a href='pdfs/First_magazine.pdf' target='_blank'>First for Women – January 15, 2009</a></li><li>Woman’s World – June 9, 2008</li><li><a href='pdfs/LifeStyle_4.2008.pdf' target='_blank'>Life and Style Weekly – April 21, 2008</a></li><li><a href='pdfs/InHollywoodXX.pdf' target='_blank'>In Hollywood Magazine – inmag.com</a></li><li><a href='pdfs/CurlyHair_for_webThis.pdf' target='_blank'>Curlyhair.com</a></li></ul>" cta="CONTACT US TODAY"  predhead="PRESS RELEASE" title="MAGAZINE PUBLICATIONS"></Text>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Quote quote="I have been coming here for three years and my appearance due to my color and style has afforded me a better position in the business world, and increased my networking and self esteem." attribution="Ed C."></Quote>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12">
						<Center copy='<h6>Linda Leigh has appeared on the following television shows:</h6><p>Your LA, Channel 4 – March, 2008</p><iframe src="https://www.youtube.com/embed/6rb1co65tTY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" class="fluidvids-item" data-fluidvids="loaded"></iframe><p>KTLA Morning Show, Channel 5 – April, 2008</p><iframe src="https://www.youtube.com/embed/B-J8SuPCk1g" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" class="fluidvids-item" data-fluidvids="loaded"></iframe>'  prehead="Appearances" title="TELEVISION APPEARANCES"></Center>
					</div>
				</div>

			</div>
		)
	}
}

export default Kudos