import { Component } from "react";
import "./index.css";

class Album extends Component {
  render() {
    return (
      <div className="album-container">
        <h1 className="title">Album</h1>

        <div className="photo-book">
          <img
            src="../public/Group.png"
            alt="Left page"
            className="album-photo"
          />

          <img
            src="../public/Albumpic.png"
            alt="Spiral binding"
            className="spiral"
          />

          <img
            src="../public/flowershape.png"
            alt="Right page"
            className="album-photo"
          />
        </div>
      </div>
    );
  }
}

export default Album;
