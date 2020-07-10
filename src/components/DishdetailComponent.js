import React from "react";
import {Card, CardTitle, CardText, CardImg,CardBody} from "reactstrap";
import moment from 'moment/moment.js';
import {BreadcrumbItem, Breadcrumb} from "reactstrap";
import {Link} from "react-router-dom";


function RenderComments({comments}){
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
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
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
    
    
    const  DishDetail = (props) =>{
        console.log('meow')
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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
        );
    }

export default DishDetail;