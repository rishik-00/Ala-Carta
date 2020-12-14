import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/13.png";
import detaildish from './detaildish';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedDish: null
			}
	}

	onDishSelect(dish) {
		this.setState({ selectedDish:dish});
	}

	renderDish(dish) {
		if(dish!= null){
			return(
					<Card>
						<CardImg width='100%' src = {img} alt = {dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
						</Card>
				);
		}
		else {
			return(
				<div></div>);
		}
	}
	render() {

		
		const menu = this.props.dishes.map((dish)=> {
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card onClick={() => this.onDishSelect(dish)}>
				<CardImg width='100%' src = {img} alt = {dish.name} />
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>	
				</Card>
				</div>
				)
		}); 
		return (
			<div className="container">
				<div className ="row">
					 {menu}
				</div>
				<div className = 'row'>
				<detaildish dish = {this.state.selectedDish}/>
				</div>
			</div>
			);
	}
}

export default Menu;