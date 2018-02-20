import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
	render(){
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6>">
							<ul className="list-inline">
								<li className="list-inline-item"><Link className="nav-link" to="/about">About</Link></li>
								<li className="list-inline-item"><Link className="nav-link" to="/services">Services</Link></li>
								<li className="list-inline-item"><Link className="nav-link" to="/products">Products</Link></li>
								<li className="list-inline-item"><Link className="nav-link" to="/contact">Contact</Link></li>
								<li className="list-inline-item"><Link className="nav-link" to="/privacy">Privacy Policy</Link></li>
							</ul>
						</div>
						<div className="col-md-6">
							<p className="text-right text-white copyright">Copyright © Hair In Vogue 2018</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;