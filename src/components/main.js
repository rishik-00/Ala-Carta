import React, { Component } from 'react';
import Menu from './menu';
import Home from './home';
import Dishdetail  from './detaildish';
import Header from './header';
import Footer from './footer';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props); 

    this.state  = {
      dishes: DISHES,
      
    };
  }

  

  render() {
    const HomePage=()=>{
      return(
        <Home/>
        );
    }

  return (
    <div>
      <Header />
     <Switch>
      <Route path= "/home" component={HomePage} />
      <Route exact path= "/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
      <Redirect to="/home" />    
     </Switch>
      
     <Footer/>
    </div>
  );
}
}

export default Main;
