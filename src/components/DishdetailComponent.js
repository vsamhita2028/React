import React from "react";
import {Card, CardTitle, CardText, CardImg,CardBody} from "reactstrap";
import moment from 'moment/moment.js'


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
    function Check({selectedD}){
        if(selectedD!=null){
            
            return(
                <div>
                    <RenderComments comments={selectedD.comments} />
                </div>
                
            );
                
        }
        else{
            return(
                <div></div>
            );
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
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.d}/>
                        
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        
                        <Check selectedD={props.d}/> 
                        
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;