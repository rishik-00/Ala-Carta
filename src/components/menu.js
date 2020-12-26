import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/13.jpg";
import { Link } from 'react-router-dom';
import {Loading } from './loading';

function Rendermenu({dish, onClick}){
		return(
				<Card >
					<Link to= {`/menu/${dish.id}`} >

						<CardImg width='100%' src = {img} alt = {dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Link>	
				</Card>

			);
}

const Menu = (props)=>{
	const menu = props.dishes.dishes.map((dish)=> {
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Rendermenu dish = {dish} />
				</div>
				);
		}); 
		if(props.dishes.isLoading) {
			 return (
                <div className="container">
                  <div className="row">
                    <Loading />
                  </div>
                </div>
              )
          }
          
          else if (props.dishes.errmess){
            return (
                <div className="container">
                  <div className="row">
                    <h4>{props.dishes.errmess}</h4>
                  </div>
                </div>
              )
          }
		else 
		return (
			<div className="container">
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>Menu</h3>
						<hr />
					</div>
				</div>
				<div className ="row">
					 {menu}
				</div>
				
			</div>
			);

}
		
		
	

export default Menu;

