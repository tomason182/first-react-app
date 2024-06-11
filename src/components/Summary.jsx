import PropTypes from "prop-types";

export default function Summary({
  personalInfo,
  handlePersonalInfo,
  isActive,
  onShow,
}) {
  return (
    <div className="form-container">
      <h3>Summary</h3>
      {isActive ? (
        <form action="" method="get" className="form summary">
          <textarea
            name="summary"
            id="summary-info"
            value={personalInfo.summary}
            onChange={handlePersonalInfo}
          />
        </form>
      ) : (
        <button onClick={onShow}>Display</button>
      )}
    </div>
  );
}

Summary.propTypes = {
  personalInfo: PropTypes.shape({
    summary: PropTypes.string,
  }),
  handlePersonalInfo: PropTypes.func.isRequired,
};
