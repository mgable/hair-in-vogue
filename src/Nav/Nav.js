import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
							<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item">
								<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
									<DropdownToggle caret>
										About
									</DropdownToggle>
									<DropdownMenu>
										<DropdownItem><Link className="nav-link" to="/philosophy">Our Philosophy</Link></DropdownItem>
										<DropdownItem><Link className="nav-link" to="/linda_leigh">Linda Leigh</Link></DropdownItem>
										<DropdownItem><Link className="nav-link" to="/boutique">Boutique</Link></DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</li>
							<li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
							<li className="nav-item"><Link className="nav-link" to="/contact_us">Contact Us</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;