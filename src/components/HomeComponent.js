import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";

function RenderCards ({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}></CardImg>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                {item.description}
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div class="container">
            <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCards item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCards item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCards item={props.leader} />
            </div>
            </div>
        </div>
    );
}
export default Home;