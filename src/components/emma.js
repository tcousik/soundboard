import React from "react";
import Board from "./board";

export default class EmmaBoard extends React.Component {
  state = {
    sounds: [
      {
        id: 1,
        mood: "Introduction",
        soundURL:
          "https://dl.dropboxusercontent.com/s/8zc6kg6tjo1syqi/1%20emma%20ethe.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 2,
        mood: "Munchdew",
        soundURL:
          "https://dl.dropboxusercontent.com/s/pe97jde3xczwa36/2%20emma%20ya.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 3,
        mood: "Uhh Oops",
        soundURL:
          "https://dl.dropboxusercontent.com/s/2qyg6bc9ibe1qow/3%20emma%20stop.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 4,
        mood: "Hufflepuff",
        soundURL:
          "https://dl.dropboxusercontent.com/s/8cmnrv1bt4k4713/4%20emma%20shot.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 5,
        mood: "Struck by Lightning",
        soundURL:
          "https://dl.dropboxusercontent.com/s/036up65w9xjsreg/5%20emma%20daddy.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 6,
        mood: "Primal Noises",
        soundURL:
          "https://dl.dropboxusercontent.com/s/bvf30o5rgqs3x23/6%20emma%20comeen.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 7,
        mood: "Family",
        soundURL:
          "https://dl.dropboxusercontent.com/s/hn3ns45v0rs6wv0/7%20emma%20baby.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 8,
        mood: "Lazer",
        soundURL:
          "https://dl.dropboxusercontent.com/s/buybbsgr2pmn7ue/8%20em%20what.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
      {
        id: 9,
        mood: "About Staying",
        soundURL:
          "https://dl.dropboxusercontent.com/s/e9k52pehlvjgg3j/9%20em%20gimme.mp3?dl=0",
        imageURL: "https://i.imgur.com/64BtOrl.jpg",
        isPlaying: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1 className="App">Emma Sound Board</h1>
        <Board sounds={this.state.sounds} />
      </div>
    );
  }
}
