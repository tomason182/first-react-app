import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeCourses from "./ResumeCourses";
import ResumeHobbies from "./ResumeHobbies";
import "../styles/resume-template.css";
import PropTypes from "prop-types";

export default function ResumeTemplate({ personalInfo, defaultInfo }) {
  return (
    <div className="resume-body">
      <ResumeHeader personalInfo={personalInfo} defaultInfo={defaultInfo} />
      <div className="resume-main">
        <ResumeSummary personalInfo={personalInfo} defaultInfo={defaultInfo} />
        <ResumeSkills />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeCourses />
        <ResumeHobbies />
      </div>
    </div>
  );
}

ResumeTemplate.propTypes = {
  personalInfo: PropTypes.object,
  defaultInfo: PropTypes.object,
};
