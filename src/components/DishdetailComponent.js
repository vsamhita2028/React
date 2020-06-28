import React,{Component} from "react";
import {Card, CardTitle, CardText, CardImg, CardImgOverlay,CardBody} from "reactstrap";
import moment from 'moment/moment.js'

class DishDetail extends Component {
    constructor(props){
        super(props);
       
    }
    renderComment(arr){
        if(arr!=null){
            const m= arr.map((com)=>{
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
            return m;
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    
    check(selectedD){
        if(selectedD!=null){
            return(
                this.renderComment(selectedD.comments) 
            );
                
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
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
    
    
    render(){
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.d)}
                        
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.check(this.props.d)}
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default DishDetail;