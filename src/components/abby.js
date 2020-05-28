import React from "react";
import Board from "./board";

export default class AbbyBoard extends React.Component {
  state = {
    sounds: [
      {
        id: 1,
        mood: "Hi",
        soundURL:
          "https://dl.dropboxusercontent.com/s/nw0ilw3k08140xd/1%20abby%20hi.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 2,
        mood: "Munchdew",
        soundURL:
          "https://dl.dropboxusercontent.com/s/6tmwd7m1atb59s3/2%20ab%20what.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 3,
        mood: "Uhh Oops",
        soundURL:
          "https://dl.dropboxusercontent.com/s/4af5tik8owqyufq/3%20abby%20fuck.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 4,
        mood: "Hufflepuff",
        soundURL:
          "https://dl.dropboxusercontent.com/s/wn3jp0xvuvt3wes/4%20abby%20angery%20tej.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 5,
        mood: "Struck by Lightning",
        soundURL:
          "https://dl.dropboxusercontent.com/s/dzgptfjbcuv1rkm/5%20abby%20emma%20watdo.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 6,
        mood: "Primal Noises",
        soundURL:
          "https://dl.dropboxusercontent.com/s/3jz81evl3118x9k/6%20abby%20hah.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 7,
        mood: "Family",
        soundURL:
          "https://dl.dropboxusercontent.com/s/xvvpdze86r3eri3/7%20abby%20welp.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 8,
        mood: "Lazer",
        soundURL:
          "https://dl.dropboxusercontent.com/s/cgco4tnefkk7k9x/8%20abby%20coke.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
      {
        id: 9,
        mood: "About Staying",
        soundURL:
          "https://dl.dropboxusercontent.com/s/fplrd6olmaz03sz/9%20abby%20heugh.mp3?dl=0",
        imageURL: "https://i.imgur.com/AGuEea8.jpg",
        isPlaying: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <h1 className="App">Abby Sound Board</h1>
        <Board sounds={this.state.sounds} />
      </div>
    );
  }
}
