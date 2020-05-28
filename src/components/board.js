import React from "react";

export default class Board extends React.Component {
  playSound = (id) => {
    let sound = this.props.sounds.find((sound) => sound.id === id);
    let currentSound = new Audio(sound.soundURL);
    currentSound.play();
  };

  renderSounds = () => {
    return this.props.sounds.map((sound) => {
      return (
        <div>
          <PicWithSound
            key={sound.id}
            sound={sound}
            playSound={this.playSound}
          />
        </div>
      );
    });
  };

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
