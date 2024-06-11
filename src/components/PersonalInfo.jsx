import PropTypes from "prop-types";

export default function PersonalInfo({
  personalInfo,
  handlePersonalInfo,
  defaultInfo,
  displayBtn,
  handleDisplayBtn,
}) {
  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Personal Information</h3>
        <button onClick={handleDisplayBtn}>
          {displayBtn ? "Display" : "Hide"}
        </button>
      </div>
      <form
        action=""
        method="get"
        className="form personal-info"
        style={{ display: displayBtn && "none" }}
      >
        <div className="form-input-container">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            name="fullName"
            placeholder={defaultInfo.fullName}
            value={personalInfo.fullName}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            placeholder={defaultInfo.phoneNumber}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            value={personalInfo.email}
            placeholder={defaultInfo.email}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="social">LinkedIn Profile</label>
          <input
            type="text"
            name="social"
            value={personalInfo.social}
            placeholder={defaultInfo.social}
            onChange={handlePersonalInfo}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="region">Region / Country</label>
          <input
            type="tel"
            name="region"
            value={personalInfo.region}
            placeholder={defaultInfo.region}
            onChange={handlePersonalInfo}
          />
        </div>
      </form>
    </div>
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
