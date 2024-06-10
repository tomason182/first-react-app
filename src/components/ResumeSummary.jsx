import PropTypes from "prop-types";

export default function ResumeSummary({ personalInfo, defaultInfo }) {
  const infoToDisplay = {
    summary: personalInfo.summary || defaultInfo.summary,
  };
  return (
    <div className="summary">
      <p>{infoToDisplay.summary}</p>
      <p></p>
    </div>
  );
}

ResumeSummary.propTypes = {
  personalInfo: PropTypes.shape({
    summary: PropTypes.string,
  }),
  defaultInfo: PropTypes.shape({
    summary: PropTypes.string,
  }),
};
