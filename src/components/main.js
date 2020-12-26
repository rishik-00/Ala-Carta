import React, { Component } from 'react';
import Menu from './menu';
import Home from './home';
import Dishdetail  from './detaildish';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import About from './aboutus';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreaters';


 const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
  })

class Main extends Component {

  constructor(props){
    super(props); 

    
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage=()=>{
      return(
        <Home dish = {this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrmess = {this.props.dishes.errmess}
              promotion = {this.props.promotions.filter((promo)=> promo.featured)[0]}
              leader = {this.props.leaders.filter((leader)=> leader.featured)[0]}
             
        />
        );
    }
    const DishWithId =({match}) => {
      return(
        <Dishdetail dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    Errmess = {this.props.dishes.errmess}
                    comments= {this.props.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
        />
        );
    }

    const Aboutus=() => {
      return(
        <About leaders = {this.props.leaders} />
        );
    }

  return (
    <div>
      <Header />
     <Switch>
      <Route path= "/home" component={HomePage} />
      <Route exact path= "/menu" component={()=> <Menu dishes={this.props.dishes} />}/>
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/aboutus" component={Aboutus} />
      <Route exact path="/contactus" component={Contact} />
      <Redirect to="/home" />    
     </Switch>
      
     <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
