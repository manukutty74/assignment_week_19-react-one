import React from "react";
import "./Cards.css";

const Cards = (props) => (

        <div className="card">
          <div className="img-container">
            <img
            value={props.id} 
            alt={props.name}
            src={props.image}
            onClick={() => props.handleClick(props.id)}
                 
                         
            />
          </div>
        </div>

     
);

export default Cards;
