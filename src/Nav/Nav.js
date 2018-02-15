import React from 'react'
import { Link } from 'react-router-dom';
import $ from "jquery";

class Nav extends React.Component{

	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {dropdownOpen: false};
	}


	close(evt){
		var target = $("#navbarResponsive")

		if (target.hasClass('show')){
			target.removeClass('show');
		}
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="/"><img src="https://dummyimage.com/290x40/000/fff.jpg&text=HAIR-IN-VOGUE-LOGO" width="290" height="40" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto" onClick={this.close}>
							<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/kudos">Kudos</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;