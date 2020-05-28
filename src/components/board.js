import React from "react";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {
        sound: null,
        mood: null,
        currentlyPlaying: null,
      },
    };
  }

  playSound(id) {
    if (this.state.audio.currentlyPlaying) {
      let currentSound = this.state.audio.sound;
      currentSound.pause();
    }
    let sound = this.props.sounds.find((sound) => {
      return sound.id === id;
    });
    let currentSound = new Audio(sound.soundURL);
    this.setState({
      audio: { sound: currentSound, mood: sound.mood, currentlyPlaying: true },
    });
    currentSound.play();

    let data = [...this.props.sounds];
    const index = data.findIndex((obj) => obj.mood === sound.mood);
    data[index].isPlaying = true;
    this.setState(data);

    currentSound.addEventListener(
      "ended",
      this.soundListener.bind(this, data, index, currentSound)
    );
  }

  soundListener(data, index, currentSound) {
    const newData = [...data];
    newData[index].isPlaying = false;
    this.setState(newData);
    currentSound.removeEventListener("ended", this.soundListener);
  }

  renderSounds() {
    return this.props.sounds.map((sound) => {
      return (
        <div>
          <PicWithSound
            key={sound.id}
            sound={sound}
            audio={this.state.audio}
            playSound={this.playSound.bind(this)}
          />
        </div>
      );
    });
  }

  render() {
    return <div className="card-container">{this.renderSounds()}</div>;
  }
}

const PicWithSound = (props) => {
  return (
    <div onClick={() => props.playSound(props.sound.id)}>
      <img alt="" src={props.sound.imageURL} />
    </div>
  );
};
