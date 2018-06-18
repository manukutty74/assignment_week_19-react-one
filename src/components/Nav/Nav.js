import React from "react";
import "./Nav.css";

 
  const Nav = props => (
    <nav>
      <ul>
        <li id="brand">
          <a href="/">A Klicky Game</a>
        </li>
  
        <li>{props.rightWrong}</li>
  
        <li>Current Score: {props.score}</li>
  
        <li>Top Score: {props.topScore}</li>
        
      </ul>
    </nav>
  );
  
 
export default Nav;
