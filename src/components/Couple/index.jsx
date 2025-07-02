import { Component } from "react";
import "./index.css";

class Couple extends Component {
  render() {
    return (
      <section className="couple-section">
        <article className="couple-article couple-article-1">
          <h2 className="couple-name">Ritesh Debtath</h2>
          <p className="couple-description">
            We look forward to building a life filled with love and countless
            memories. We are excited to share our joy.
          </p>
        </article>
        <div>
          <img src="/story-shape.png" alt="couple-image-1" className="couple-bg-1" />
          <img src="/indain-couple.png" alt="couple-image-2" className="couple-bg-2" />
        </div>
        <article className="couple-article couple-article-2">
          <h2 className="couple-name">Joya Syarma</h2>
          <p className="couple-description">
            We look forward to building a life filled with love and countless
            memories. We are excited to share our joy.
          </p>
        </article>
      </section>
    );
  }
}

export default Couple;
