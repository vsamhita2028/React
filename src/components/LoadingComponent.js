import React from "react";

export const Loading =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <span class="fa fa-spinner fa-pulse fa-fw text-primary"></span>
                    <p>Loading ...</p>
                </div>
            </div>
        </div>
    )
}