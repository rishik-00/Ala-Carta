import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/14.jpg";
import {Loading } from './loading';
function RenderCard({item, isLoading, errmess}) {

	if(isLoading){
		return(
			<Loading />
			)
	}

	else if (errmess) {
		return(
			<h4>{errmess}</h4>
			)
	}
	else 
			{return(
					<Card>
						<CardImg src ={img} alt = {item.name} />
						<CardBody>
							<CardTitle>{item.name}</CardTitle>
							{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
							<CardText>{item.description}</CardText>
						</CardBody>
					</Card>
					);}
}


function Home(props){

	return(
		<div className="container">
			<div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading}
                    			errmess = {props.dishesErrmess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
		</div>
		);
}

export default Home;