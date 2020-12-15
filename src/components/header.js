import React, { Component } from 'react';
import {

  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron

} from 'reactstrap';
import { NavLink }  from 'react-router-dom';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/logo.png";
class Header extends Component {

		constructor(props){
			super(props);
			this.state={
				isNavOpen: false
			};
			this.toggleNav=this.toggleNav.bind(this);    /*this is done because we have directly called togglenav*/
		}

		toggleNav(){
			this.setState({
				isNavOpen:!this.state.isNavOpen
			})
		}
	render(){
		return(
				<React.Fragment>

				<Navbar dark expand='md'>
				  <div className='container'>
					<Navbar NavbarToggler onClick={this.toggleNav} />  {/*we can call this by arrow function too*/}
			        <NavbarBrand className="mr-auto" href="/">
			        	<img src={img} height="30" width="41" alt="Resti di pico" />
			        </NavbarBrand>
			       <Collapse isOpen={this.state.isNavOpen} navbar>
			        <Nav navbar>
			        	<NavItem>
			        		<NavLink className='nav-link' to='/home'>
			        		<span className='fa fa-home fa-lg'></span>Home
			        		</NavLink>
			        	</NavItem>
			        	<NavItem>
			        		<NavLink className='nav-link' to='/aboutus'>
			        		<span className='fa fa-info fa-lg'></span>About us
			        		</NavLink>
			        	</NavItem>
			        	<NavItem>
			        		<NavLink className='nav-link' to='/menu'>
			        		<span className='fa fa-list fa-lg'></span>Menu
			        		</NavLink>
			        	</NavItem>
			        	<NavItem>
			        		<NavLink className='nav-link' to='/contactus'>
			        		<span className='fa fa-address-card fa-lg'></span>Contact us
			        		</NavLink>
			        	</NavItem>
			        </Nav>
			        </Collapse>
			        </div>
			     </Navbar>
			     <Jumbotron>
			     	<div className='container'>
			     		<div className="row row-header">
			     			<div className='col-12 col-sm-6'>
			     			<h1>Resti de pico</h1>
			     			<p>Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
			     			</div>
			     		</div>
			     	</div>
			     </Jumbotron>
				</React.Fragment>
			);
	}
}

export default Header;