import { useState } from "react";

export default function PersonalInfo() {
  const [formData, setFromData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    social: "",
    location: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submitting form:", formData);
  }

  return (
    <form
      action=""
      method="get"
      className="form personal-info"
      onSubmit={handleFormSubmit}
    >
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <label htmlFor="phone-number">Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="social">LinkedIn Profile</label>
        <input
          type="text"
          name="social"
          value={formData.social}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Region / Country</label>
        <input
          type="tel"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />

        <div className="button-container">
          <button type="button" className="back" disabled>
            Back
          </button>

          <button type="submit" className="submit">
            Submit & continue
          </button>
        </div>
      </fieldset>
    </form>
  );
}
