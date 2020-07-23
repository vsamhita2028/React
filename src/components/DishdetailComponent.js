import React, { Component } from "react";
import {Card, CardTitle, CardText, CardImg,CardBody, Button, Modal, ModalHeader, ModalBody, Row, Col, Label} from "reactstrap";
import moment from 'moment/moment.js';
import {BreadcrumbItem, Breadcrumb} from "reactstrap";
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponent"
import { LocalForm, Control, Errors } from "react-redux-form";
import {baseUrl} from "../shared/baseUrl";

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            openModal : false
        }
    }
    toggleModal=()=>{
        this.setState({openModal : !this.state.openModal});
    }
    handleSubmit=(values)=>{
        this.props.addComment(this.props.dishId, values.rating, values.fullname, values.comment);
    }
    render(){
        return(
            <div>
                <Button outline color="secondary" onClick={this.toggleModal}><span className="fa fa-pencil"/> Submit Comment</Button>
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Col sm="12">
                                    <Label htmlFor="ratings">Ratings</Label>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col sm="12">
                                <Label htmlFor="fullname">Your Name</Label>
                                <Control.text model=".fullname" id="fullname" name="fullname" placeholder="Your Name" className="form-control"
                                validators={{
                                    required : (val) => val && val.length,
                                    maxLength : (val) => !(val) || (val.length <= 15),
                                    minLength : (val) => val && (val.length > 2)
                                }}
                               />
                                <Errors
                                model=".fullname"
                                className="text-danger"
                                show="touched"
                                messages={{
                                    required : "Name is required",
                                    maxLength : " Must be 15 characters or less",
                                    minLength : " Must be greater than 2 characters"
                                }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col sm="12">
                                <Label htmlFor=".comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" className="form-control" name="comment" rows="6" />                                        
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col sm="12">
                                    <Button color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
function RenderComments({comments, addComment, dishId}) {

    if(comments!=null){
        const m= comments.map((com)=>{
            const l=com.date
            return (
              <div>
                  <ul className="list-unstyled">
                      <li><p>{com.comment}</p>
                      <p>--{com.author}, {moment(l).format('MMMM Do YYYY')}</p>
                      </li>
                  </ul>
              </div>
          );
        });
        return (
            <div>
                <h4>Comments</h4>
                <div>{m}</div>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );

    }
    else{
        return(
            <div></div>
        )
    }
    
}
function RenderDish({dish}){
    if(dish!=null){
        return(
            <Card >
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
            
        );   
    }
    else{
        return(
            <div></div>
        );
    }    
}

function DishDetail(props) {
    if(props.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if(props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }else if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>    
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                    </div>
                </div>
                </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
        
    
}

    
export default DishDetail;