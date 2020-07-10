import React from "react";
import { ButtonGroup, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from "react-router-dom";

function Contact(props){
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
            
        </div>
    );
}
export default Contact;