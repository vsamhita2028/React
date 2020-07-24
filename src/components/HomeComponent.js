import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import{Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";


function RenderCards ({item,isLoading,errMess}) {
    if(isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    } else if(errMess ) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        )
    }else{
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}></CardImg>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    {item.description}
                </CardBody>
            </Card>
        );
    }
    
}

function Home(props){
    
    return(
        <div class="container">
            <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                
                <RenderCards  isLoading={props.dishesLoading} errMess={props.dishErrMess} item={props.dish}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCards  isLoading={props.promoLoading} errMess={props.promoErrMess} item={props.promotion}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCards item={props.leader} />
            </div>
            </div>
        </div>
    );
}
export default Home;