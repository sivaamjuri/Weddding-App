import { Component } from "react";
import "./index.css";

class ScheduleCard extends Component {
  render() {
    const { title, date, time } = this.props;

    return (
      <article className="schedule-card">
        <img
          src="/story-shape.png"
          alt="card-flower-bg"
          className="schedule-card-bg"
        />
        <div className="schedule-card-overlay" />
        <div className="schedule-card-description">
          <h3 className="schedule-title">{title}</h3>
          <p className="schedule-date">{date}</p>
          <p className="schedule-time">{time}</p>
        </div>
      </article>
    );
  }
}

class SchedulesSection extends Component {
  schedules = [
    {
      title: "Mehndi Ceremony",
      date: "March 25, 2024",
      time: "4:00 PM - 7:00 PM",
    },
    {
      title: "Sangeet Night",
      date: "March 26, 2024",
      time: "7:00 PM - 11:00 PM",
    },
    {
      title: "Haldi Ceremony",
      date: "March 27, 2024",
      time: "10:00 AM - 1:00 PM",
    },
    {
      title: "Pithi Ceremony",
      date: "March 28, 2024",
      time: "11:00 AM - 2:00 PM",
    },
    {
      title: "Tilak Ceremony",
      date: "March 29, 2024",
      time: "12:00 PM - 3:00 PM",
    },
    {
      title: "Bachelor Party",
      date: "March 27, 2024",
      time: "8:00 PM - 1:00 AM",
    },
  ];
  render() {
    return (
      <section id="schedules" className="schedules-section">
        <h1 className="schedules-title">Schedules</h1>
        <div className="schedules-container">
          <div className="schedules-row">
            {this.schedules.map((schedule, index) => (
              <ScheduleCard
                key={index}
                title={schedule.title}
                date={schedule.date}
                time={schedule.time}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SchedulesSection;
