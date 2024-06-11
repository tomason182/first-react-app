import PropTypes from "prop-types";

export default function Summary({ personalInfo, handlePersonalInfo }) {
  return (
    <div className="form-container">
      <div className="form-header">
        <h3>Summary</h3>
        <button>Show</button>
      </div>
      <form action="" method="get" className="form summary">
        <textarea
          name="summary"
          id="summary-info"
          value={personalInfo.summary}
          onChange={handlePersonalInfo}
        />
      </form>
    </div>
  );
}

Summary.propTypes = {
  personalInfo: PropTypes.shape({
    summary: PropTypes.string,
  }),
  handlePersonalInfo: PropTypes.func.isRequired,
};
