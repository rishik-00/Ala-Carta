import React,{ Component } from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle} from 'reactstrap';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/13.png";
class DishDetail extends Component
{
    constructor(props)
    {
    
        super(props);

      
    }
    renderDish(dish)
    {
        return(<div className='row'>
        <Card>
            <CardImg width='100%' src={img} alt={dish.name}/>
            <CardBody>
                <CardTitle>
                    {dish.name}
                </CardTitle>
            </CardBody>
            <CardText>
                {dish.description}
            </CardText>
        </Card>
    </div>
)
    }
    renderComments(comments)
    {  
            return(

                    <div className='row'>
                            <h4>comments</h4>
                         <ul>
                            {comments.map((temp_comment)=>(
                                <li key={temp_comment.id}>
                                    <p>{temp_comment.comment}</p>
                                    <p> {temp_comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', date:'2-digit'}).format(new Date(Date.parse(temp_comment.date)))}</p></li>
        
                            ))}
                        </ul>
                        
                    </div>
                    
                   
                                 
        )
       
        
    }
    render()
    {
            
            if(this.props.dish!=null)
            {
                
                return(
                    <div className = 'container'>
                    <div className="row">
                   
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>  
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                          {this.renderDish(this.props.dish)}
                        </div>
                        
                        <div className='col-12 col-md-5 m-1'>
                            
                               
                            {this.renderComments(this.props.dish.comments)}
                            
                        </div>
                        
                    </div>
                    </div>
                )
            }
            else
            {
                
                return(<div>

                </div>)
            }
       
    }
}
export default DishDetail;





