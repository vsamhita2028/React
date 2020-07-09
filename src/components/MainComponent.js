import React, { Component } from 'react';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent"
import { DISHES } from '../shared/dishes';
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import {COMMENTS} from "../shared/comments";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent"
import {Switch, Route, Redirect} from "react-router-dom"

class Main extends Component {

  constructor(props){

    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
    console.log(this.state.dishes)
  }
  

  render() {
    const HomePage = () =>{
      return(
        <Home 
                  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                  leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              />
      );
    }
    return (
      <div >
        <Header />
        {/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail d={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />  */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
