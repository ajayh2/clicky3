import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./friends.json";

class App extends Component {
  state = {
    cards,
    selectedImg: [],
    topScore: 0,
    score: 0,
    message: "",
    mix: "false"
  };
  clickPicture = id => {
    const mixImg = this.shuffle(cards);
    this.setState({cards: mixImg});
    if (this.state.selectedImg.includes(id)) {
      this.setState({ score: 0, selectedImg: [], message: "You clicked on same image, Try Again.", mix: "true"});
    }
    else {
      this.setState({
        selectedImg: this.state.selectedImg.concat([id]),
        score: this.state.score + 1,
        message: "Correct!!",
        mix: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }
  shuffle = (imagesA) => {
      for (let i = imagesA.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [imagesA[i], imagesA[j]] = [imagesA[j], imagesA[i]];
      }
      return imagesA;
  }
  render() {
    return (
      <div className="App">
        <h3 className="App-intro">
          <strong>Memory Game! Don't click on same image more than once!</strong> 
          <p className = "score"><strong>Score: {this.state.score}   |   TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        <Wrapper
        shakeWrapper = {this.state.mix}
        pictures=
          {this.state.cards.map(picture => (
            <Card
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} 
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
      </div>
    );
  }
}

export default App;
