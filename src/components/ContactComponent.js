import React,{Component} from "react";
import { ButtonGroup, Breadcrumb, BreadcrumbItem, Label, Col, Button,Row } from "reactstrap";
import {Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {Control, LocalForm,Errors} from "react-redux-form"

const required = (val)=> val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength= (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component{
    constructor(props){
        super(props);
        
    }
    
    handleSubmit =(values) => {
        alert("Current values in state" + JSON.stringify(values));
           
    }
   
    
    render(){
        
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>      
                </div>
                <h3>Contact Us</h3>
                <hr />  
                <div className="row-content">
                <div className="row">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h4>Our Address</h4>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <span className="fa fa-phone"></span>  : +852 1234 5678<br />
                            <span className="fa fa-fax" /> :  +852 8765 4321<br />
                            <span className="fa fa-envelope" /> : <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h4>Map of our Location</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 offset-sm-1">
                        <ButtonGroup>
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </ButtonGroup>
                    </div>
                </div>
                </div>
                <div className="row row-content ">
                    <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname"  id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                    validators={
                                        {required, minLength: minLength(2), maxLength :maxLength(13)}
                                    }
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required : "Required to fill the field ",
                                        minLength : "Must include more than 2 characters",
                                        maxLength : "Must include less than 13 charaters",
                                        }
                                    } />
                                </Col>
                               
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control"
                                    validators={
                                        {required, minLength: minLength(2), maxLength :maxLength(13)}
                                    }
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required : "Required to fill the field ",
                                        minLength : "Must include more than 2 characters",
                                        maxLength : "Must include less than 13 charaters",
                                        }
                                    } />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Number" className="form-control"
                                     validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required : "Required to fill the field ",
                                        minLength : "Must include more than 2 characters",
                                        maxLength : "Must include less than 13 charaters",
                                        isNumber : "Must be a number"
                                    }
                                    } />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control"
                                    validators={
                                        {required,validEmail}
                                    }
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required : "Required to fill the field ",                                        
                                        validEmail : "Invalid Email"}
                                    } />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <Row className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree"/> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </Row>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>                                   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control"
                                    validators={
                                        {required, minLength: minLength(2), maxLength :maxLength(50)}
                                    }
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".message"
                                    show="touched"
                                    messages={{
                                        required : "Required to fill the field ",
                                        minLength : "Must include more than 2 characters",
                                        maxLength : "Must include less than 13 charaters",
                                       }
                                    } />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
    
}
export default Contact;