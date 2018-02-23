import React from 'react'
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import './Nav.css';

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
			<nav className="navbar navbar-expand-lg navbar-light hiv-bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/"><img className="mobile" src="https://dummyimage.com/265x35/EBE1DF/000.jpg&text=HAIR-IN-VOGUE-LOGO" width="265" height="35" alt="hair in vogue logo"/><img className="desktop" src="https://dummyimage.com/290x40/EBE1DF/000.jpg&text=HAIR-IN-VOGUE-LOGO" width="290" height="40" alt="hair in vogue logo"/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto" onClick={this.close}>
							<li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/kudos">Kudos</NavLink></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;