import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal,  ModalHeader, ModalBody, ModalFooter, Row, Label, Col  } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import img from "C:/Users/Rishik/Desktop/Web/reactapp/src/shared/assets/13.jpg";
import  { Link } from 'react-router-dom';

function RenderDish({dish})
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
     function RenderComments({comments})
    {  
            
            const commentsTobeRendered = comments.map( (temp_comment, index) => {
            return (
                <div key={index}>
                    <p>{temp_comment.comment}</p>
                    <p>-- {temp_comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(temp_comment.date)))}</p>
                </div>
            )
        })
        return(
            <div>
                <h4>Comments</h4>
                {commentsTobeRendered}
                <CommentForm />
            </div>
        );

                    
                

            
        
    }
   const DishDetail = (props) =>
    {
            
            if(props.dish!=null)
            {
                
                return(
                    <div className = 'container'>
                        <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        
                            <div className="row">
                                <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr/>
                                </div>
                            </div>  
                            <div className='row'>
                                <div className='col-12 col-md-5 m-1'>
                                    <RenderDish dish ={props.dish} />
                                </div>
                            
                                <div className='col-12 col-md-5 m-1'>
                                    <RenderComments comments = {props.comments} />
                                </div>
                            
                            </div>
                    </div>
                );
            }
            else
            {
                
                return(<div>

                </div>);
            }
       
    }


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }

  render() {
    const required = val => val && val.length;
    const maxLength = len => val => !val || val.length <= len;
    const minLength = len => val => val && val.length >= len;
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={{ size: 12 }}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={5}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;





