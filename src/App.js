import React, {Component} from "react";
import Nav from "./components/Nav";
import Images from "./images.json";
import Cards from "./components/Cards";
import { Col, Row, Container } from "./components/Grid";


function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component { 
 

  state = {
    Images,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };


// This is the function that handles every click  


handleClick = (id) => {
   if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id)});   
   } 
   else
    {
     this.handleReset();
   }
};
  

handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ rightWrong: "You win!" });
  }
  this.handleShuffle();
};



handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightWrong: "You lose!",
    clicked: []
  });
  this.handleShuffle();
};


handleShuffle = () => {
  let shuffledImages = shuffleImages(Images);
  this.setState({ Images : shuffledImages });
};


 
// This section renders the JSX 

   render() {
    
     return(
       <div>
         <Nav score={this.state.currentScore} topScore={this.state.topScore} rightWrong={this.state.rightWrong}/>  
         <br/>  
        

     <Container>
          <Row>
            {this.state.Images.map(Image => (
              <Col size="md-3 sm-6">
                <Cards
                   key={Image.id}
                   handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                   handleShuffle={this.handleShuffle}
                   id={Image.id}
                   image={Image.image}
                />
              </Col>
            ))}
          </Row>
        </Container>


      </div>

     );
   } // end of render fx
}    // end of App fx

export default App;
