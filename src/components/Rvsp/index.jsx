import { Component } from "react";
import "./index.css";

class RSVPSection extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      attending: "",
      guests: "",
      events: "",
    },
    submittedData: null,
    errors: {},
  };

  handleInputChange = (field, value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
      errors: {
        ...prevState.errors,
        [field]: "",
      },
    }));
  };

  validateForm = () => {
    const { name, email, attending } = this.state.formData;
    const errors = {};

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
    if (!attending) errors.attending = "Please select if you are attending";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) return;

    this.setState({
      submittedData: { ...this.state.formData },
    });
  };

  render() {
    const { formData, errors, submittedData } = this.state;

    return (
      <section id="rsvp" className="rsvp-section">
        <img src="/RectangleRvsp.png" alt="" className="rsvp-bg" />
        <form onSubmit={this.handleSubmit} className="rsvp-form">
          <h2 className="rsvp-title">Are You Attending?</h2>

          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => this.handleInputChange("name", e.target.value)}
              className="form-input"
            />
            <div className="form-underline" />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => this.handleInputChange("email", e.target.value)}
              className="form-input"
            />
            <div className="form-underline" />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          {/* Attending Radio Group */}
          <fieldset className="radio-group">
            <legend className="sr-only">Are you attending?</legend>
            <div className="radio-option">
              <input
                type="radio"
                id="attending-yes"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={(e) =>
                  this.handleInputChange("attending", e.target.value)
                }
                className="radio-input"
              />
              <label htmlFor="attending-yes" className="radio-label">
                Yes, I will be there
              </label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="attending-no"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={(e) =>
                  this.handleInputChange("attending", e.target.value)
                }
                className="radio-input"
              />
              <label htmlFor="attending-no" className="radio-label">
                Sorry, I can't come
              </label>
            </div>
            {errors.attending && (
              <div className="error-message">{errors.attending}</div>
            )}
          </fieldset>

          {/* Number of Guests */}
          <div className="form-group">
            <label htmlFor="guests" className="form-label">
              Number Of Guests
            </label>
            <input
              id="guests"
              type="number"
              value={formData.guests}
              onChange={(e) => this.handleInputChange("guests", e.target.value)}
              className="form-input"
            />
            <div className="form-underline" />
          </div>

          {/* Events Field */}
          <div className="form-group">
            <label htmlFor="events" className="form-label">
              What Will You Be Attending
            </label>
            <input
              id="events"
              type="text"
              value={formData.events}
              onChange={(e) => this.handleInputChange("events", e.target.value)}
              className="form-input"
            />
            <div className="form-underline" />
          </div>

          <button type="submit" className="submit-button">
            RSVP
          </button>
        </form>

        {/* Optional: Display submitted data below the form */}
        {submittedData && (
          <div className="submitted-info">
            <h3>Submitted Data</h3>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </section>
    );
  }
}

export default RSVPSection;
