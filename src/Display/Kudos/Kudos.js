import React from 'react';
import Center from '../common/Center.js'
import Image from '../common/Image.js'
import Text from '../common/Text.js'

class Kudos extends React.Component{
	render(){
		return (
			<div className="services">
				<div className="row">
					<div className="col-sm-12">
						<Center copy="<h6>Linda Leigh has designed and created extensions and hair pieces for the following shows and others:</h6><ul><li>AMC “Madmen” – designed hairpiece for lead actress Christina Henke, playing Joan</li><li>“Shark” – designed extensions for lead actress Jeri Ryan</li><li>HBO “12 Miles of Bad Road” – designed extensions for lead actress</li><li>“The 19th Wife” – designed extensions for actress, Tyler Leigh</li></ul>"  prehead="CREDIT &amp; PRESS RELEASES" title="CREDITS: FILM &amp; TV"></Center>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 col-md-6">
						<Image image="https://dummyimage.com/470x313/000/fff"></Image>
					</div>
					<div className="col-sm-12 col-md-6">
						<Text copy="<h6>Linda Leigh has contributed to the following magazines:</h6><ul><li>First for Women – January 15, 2009</li><li>Woman’s World – June 9, 2008</li><li>Life and Style Weekly – April 21, 2008</li><li>In Hollywood Magazine – inmag.com</li><li>Curlyhair.com</li></ul>" cta="CONTACT US TODAY"  predhead="PRESS RELEASE" title="MAGAZINE PUBLICATIONS"></Text>
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