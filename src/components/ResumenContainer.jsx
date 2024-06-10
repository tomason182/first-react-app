import ResumeTemplate from "./ResumeTemplate";
import PropTypes from "prop-types";

export default function ResumeContainer({ personalInfo, defaultInfo }) {
  return (
    <div className="resume-container">
      <ResumeTemplate personalInfo={personalInfo} defaultInfo={defaultInfo} />
    </div>
  );
}

ResumeContainer.propTypes = {
  personalInfo: PropTypes.object,
  defaultInfo: PropTypes.object,
};
