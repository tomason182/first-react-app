import PropTypes from "prop-types";

export default function PersonalInfo({
  personalInfo,
  handlePersonalInfo,
  defaultInfo,
}) {
  return (
    <form action="" method="get" className="form personal-info">
      <fieldset>
        <legend>Personal Info</legend>

        <label htmlFor="full-name">Full name</label>
        <input
          type="text"
          name="fullName"
          placeholder={defaultInfo.fullName}
          value={personalInfo.fullName}
          onChange={handlePersonalInfo}
        />

        <label htmlFor="phone-number">Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={personalInfo.phoneNumber}
          placeholder={defaultInfo.phoneNumber}
          onChange={handlePersonalInfo}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={personalInfo.email}
          placeholder={defaultInfo.email}
          onChange={handlePersonalInfo}
        />

        <label htmlFor="social">LinkedIn Profile</label>
        <input
          type="text"
          name="social"
          value={personalInfo.social}
          placeholder={defaultInfo.social}
          onChange={handlePersonalInfo}
        />

        <label htmlFor="location">Region / Country</label>
        <input
          type="tel"
          name="region"
          value={personalInfo.region}
          placeholder={defaultInfo.region}
          onChange={handlePersonalInfo}
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

PersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    fullName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    region: PropTypes.string,
  }),
  handlePersonalInfo: PropTypes.func.isRequired,
  defaultInfo: PropTypes.shape({
    fullName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};
