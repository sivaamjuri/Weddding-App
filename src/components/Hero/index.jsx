import { Component } from "react";
import "./index.css";

class Hero extends Component {
  state = {
    timeLeft: {
      days: 184,
      hours: 9,
      minutes: 19,
      seconds: 2,
    },
  };

  render() {
    const { timeLeft } = this.state;
    return (
      <section id="home" className="hero">
        <img src="/hero.png" alt="" className="hero-image" />
        <img
          src="/title-flower-five.png"
          alt="bride-image"
          className="hero-flower-image"
        />
        <h1 className="hero-title">Ritesh & Joya</h1>
        <p className="hero-subtitle">Our Big Day is November 15, 2024</p>
        <img src="/date-shape 1.png" alt="" className="hero-decorative" />
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Mins</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Secs</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
