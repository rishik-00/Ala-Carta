import React, { Component } from 'react';
import Menu from './menu';
import Dishdetail  from './detaildish';
import {

  Navbar,
  NavbarBrand,
  

} from 'reactstrap';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props); 

    this.state  = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishID) {
    this.setState({ selectedDish:dishID});

  }

  render() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Resti de pico</NavbarBrand>
           
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)}  />
      <Dishdetail  dish = {this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
    {/*this is checking the dish id which is similar to dishID and passing that dish to dishsetail 
     and DISHID we are passing from menu
     other way to do it was just select dish and pass dish*/}
    </div>
  );
}
}

export default Main;
