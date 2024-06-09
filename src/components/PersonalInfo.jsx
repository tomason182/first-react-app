import { useState } from "react";

export default function PersonalInfo() {
  const [formData, setFromData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    social: "",
    location: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });
  }

  return (
    <form
      action=""
      method="get"
      className="form personal-info"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          name="full-name"
          onChange={(e) => setValues(e.target.value)}
        />

        <label htmlFor="phone-number">Phone number</label>
        <input type="tel" name="phoneNumber" />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" />

        <label htmlFor="social">LinkedIn Profile</label>
        <input type="email" name="social" />

        <label htmlFor="location">Region / Country</label>
        <input type="tel" name="location" />

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
