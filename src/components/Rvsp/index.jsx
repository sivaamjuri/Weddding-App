import { Component } from "react";
import "./index.css";

// Reusable input field (text, email, number)
const FormField = ({ id, label, type = "text", value, onChange, error }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="form-input"
    />
    <div className="form-underline" />
    {error && <div className="error-message">{error}</div>}
  </div>
);

// Reusable radio group
const RadioGroup = ({ value, onChange, error }) => (
  <fieldset className="radio-group">
    <legend className="sr-only">Are you attending?</legend>
    <div className="radio-option">
      <input
        type="radio"
        id="attending-yes"
        name="attending"
        value="yes"
        checked={value === "yes"}
        onChange={(e) => onChange("attending", e.target.value)}
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
        checked={value === "no"}
        onChange={(e) => onChange("attending", e.target.value)}
        className="radio-input"
      />
      <label htmlFor="attending-no" className="radio-label">
        Sorry, I can't come
      </label>
    </div>
    {error && <div className="error-message">{error}</div>}
  </fieldset>
);

class RSVPSection extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      attending: "",
      guests: "",
      events: "",
    },
    errors: {},
  };

  handleInputChange = (field, value) => {
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [field]: value },
      errors: { ...prevState.errors, [field]: "" },
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

    console.log("RSVP submitted:", this.state.formData);
    alert("Thank you for your RSVP!");

    this.setState({
      formData: {
        name: "",
        email: "",
        attending: "",
        guests: "",
        events: "",
      },
      errors: {},
    });
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <section id="rsvp" className="rsvp-section">
        <img src="/RectangleRvsp.png" alt="" className="rsvp-bg" />
        <form onSubmit={this.handleSubmit} className="rsvp-form">
          <h2 className="rsvp-title">Are You Attending?</h2>

          <FormField
            id="name"
            label="Name"
            value={formData.name}
            onChange={this.handleInputChange}
            error={errors.name}
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={this.handleInputChange}
            error={errors.email}
          />

          <RadioGroup
            value={formData.attending}
            onChange={this.handleInputChange}
            error={errors.attending}
          />

          <FormField
            id="guests"
            label="Number Of Guests"
            type="number"
            value={formData.guests}
            onChange={this.handleInputChange}
          />

          <FormField
            id="events"
            label="What Will You Be Attending"
            value={formData.events}
            onChange={this.handleInputChange}
          />

          <button type="submit" className="submit-button">
            RSVP
          </button>
        </form>
      </section>
    );
  }
}

export default RSVPSection;
