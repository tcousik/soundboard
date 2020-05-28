import React from "react";
import Board from "./board";

export default class TejasBoard extends React.Component {
  state = {
    sounds: [
      {
        id: 1,
        mood: "Introduction",
        soundURL:
          "https://dl.dropboxusercontent.com/s/nppskmk9yrwe8h5/1%20tej%20contag.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 2,
        mood: "Munchdew",
        soundURL:
          "https://dl.dropboxusercontent.com/s/xaqsvslim0ywyc8/2%20tejas%20god.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 3,
        mood: "Uhh Oops",
        soundURL:
          "https://dl.dropboxusercontent.com/s/jrnaw65cmxlngk5/3%20tej%20any.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 4,
        mood: "Hufflepuff",
        soundURL:
          "https://dl.dropboxusercontent.com/s/cewydjc5ahsydq4/4%20tej%20bro.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 5,
        mood: "Struck by Lightning",
        soundURL:
          "https://dl.dropboxusercontent.com/s/4x8sjzr6tzjpdtl/5%20tej%20emmaaa.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 6,
        mood: "Primal Noises",
        soundURL:
          "https://dl.dropboxusercontent.com/s/gso05jm6uzg2lut/6%20tej%20hmm.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 7,
        mood: "Family",
        soundURL:
          "https://dl.dropboxusercontent.com/s/q6l84x6vqf4lrzr/7%20tej%20notice.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 8,
        mood: "Lazer",
        soundURL:
          "https://dl.dropboxusercontent.com/s/1qqf72pp2ipazye/8%20tej%20stfu.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
      {
        id: 9,
        mood: "About Staying",
        soundURL:
          "https://dl.dropboxusercontent.com/s/w84ixq1zjbusmt8/9%20tej%20who.mp3?dl=0",
        imageURL: "https://i.imgur.com/E75oI2P.jpg",
        isPlaying: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1 className="App">Tejas Sound Board</h1>
        <Board sounds={this.state.sounds} />
      </div>
    );
  }
}
