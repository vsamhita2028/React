import React,{Component} from "react";
import { Navbar, NavbarBrand, Jumbotron, Collapse, NavbarToggler, Nav, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from "react-router-dom";

class Header extends Component{
    
    constructor(props){
        super(props);
        this.state={
            isNavOpen : false,
            isModalOpen :false
        } 
       // this.toggleNav = this.toggleNav.bind(this);
       //this.toggleModal=this.toggleModal.bind(this)
           
    }
    toggleNav = ()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    } 
    toggleModal=()=>{
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }  
    handleSubmit=(event)=>{
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    } 
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={  this.toggleNav}/>
                        <NavbarBrand href="/" className="mr-auto">
                        <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg mr-1" ></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg mr-1" ></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg mr-1" ></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-book fa-lg mr-1" ></span>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username" >Username</Label>                                
                                <Input type="text" className="username" name="username" innerRef={(input)=> this.username =input} />                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" >Password</Label>                                
                                <Input type="text" className="password" name="password" innerRef={(input)=> this.password =input}  />                                
                            </FormGroup>
                            <FormGroup check>
                                <Label check >
                                    <Input type="checkbox" name="remember" innerRef={(input)=> this.remember =input}  /> {' '} Remember me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" >Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        );
    }
    
}
export default Header;
