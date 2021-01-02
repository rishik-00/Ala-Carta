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
import { postComment, fetchDishes, fetchComments, fetchPromos, postFeedback } from '../redux/ActionCreaters';
import { fetchLeaders } from '../redux/ActionCreaters';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


 const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      leaders: state.leaders,
      promotions: state.promotions
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())}, 
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders:()=>dispatch(fetchLeaders()),
    postFeedback:(values)=>dispatch(postFeedback(values))
  })

class Main extends Component {

  constructor(props){
    super(props); 

    
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage=()=>{
      return(
        <Home dish = {this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrmess = {this.props.dishes.errmess}
              promotion = {this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrmess = {this.props.promotions.errmess}
              leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
              leadersLoading={this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
              
             
        />
        );
    }
    const DishWithId =({match}) => {
      return(
        <Dishdetail dish = {this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    Errmess = {this.props.dishes.errmess}
                    comments= {this.props.comments.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId,10))}
                    commentsErrmess = {this.props.comments.errmess}
                    postComment={this.props.postComment}
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
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
      <Switch>
      <Route path= "/home" component={HomePage} />
      <Route exact path= "/menu" component={()=> <Menu dishes={this.props.dishes} />}/>
      <Route path="/menu/:dishId" component={DishWithId}/>
     <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders.leaders} 
                isLoading={this.props.leaders.isLoading} 
                errMess={this.props.leaders.errMess}
                postComment={this.props.postComment}/>}/>
      <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
      <Redirect to="/home" />    
      </Switch>
       </CSSTransition>
    </TransitionGroup>
     <Footer/>
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
