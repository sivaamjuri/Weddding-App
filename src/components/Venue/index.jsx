import React, { Component } from "react";
import "./index.css";

class VenueCard extends Component {
  render() {
    const { title, date, address, imageSrc } = this.props;

    return (
      <article id="venue" className="venue-card">
        <img
          src="/story-shape.png"
          alt="Flower-frame"
          className="venue-card-bg"
        />
        <img src={imageSrc} alt="" className="venue-card-image" />
        <div className="venue-descript">
          <h3 className="venue-title">{title}</h3>
          <time className="venue-date">{date}</time>
          <address className="venue-address">{address}</address>
        </div>
      </article>
    );
  }
}

class VenueSection extends Component {
  constructor(props) {
    super(props);
    this.venues = [
      {
        title: "The Reception",
        date: "Monday, 12 Apr. 2024 1:00 PM – 2:30 PM",
        address:
          "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
        imageSrc: "/story-six-1.png",
        alt: "reception-1",
      },
      {
        title: "The Ceremony",
        date: "Monday, 15 Apr. 2024 1:00 PM – 2:30 PM",
        address:
          "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
        imageSrc: "/story-six-2.png",
        alt: "reception-2",
      },
      {
        title: "The Party",
        date: "Monday, 25 Apr. 2025 1:00 PM – 2:30 PM",
        address:
          "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
        imageSrc: "/story-six-3.png",
        alt: "reception-3",
      },
    ];
  }

  render() {
    return (
      <section className="venue-section">
        <h2 className="venue-section-title">When &amp; Where</h2>
        <div className="venue-cards">
          {this.venues.map((venue, index) => (
            <VenueCard
              key={index}
              title={venue.title}
              date={venue.date}
              address={venue.address}
              imageSrc={venue.imageSrc}
            />
          ))}
        </div>
        <div className="maps-container">
          <img
            src="/maps.png"
            alt="Wedding venue location map"
            className="venue-map"
          />
        </div>
      </section>
    );
  }
}

export default VenueSection;
