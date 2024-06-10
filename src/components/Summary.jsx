import PropTypes from "prop-types";

export default function Summary({ personalInfo, handlePersonalInfo }) {
  return (
    <>
      <form action="" method="get" className="form summary">
        <fieldset>
          <legend>Summary</legend>
          <textarea
            name="summary"
            id="summary-info"
            value={personalInfo.summary}
            onChange={handlePersonalInfo}
          />
        </fieldset>
      </form>
    </>
  );
}

Summary.propTypes = {
  personalInfo: PropTypes.shape({
    summary: PropTypes.string,
  }),
  handlePersonalInfo: PropTypes.func.isRequired,
};
