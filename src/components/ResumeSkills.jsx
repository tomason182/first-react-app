import PropTypes from "prop-types";

export default function ResumeSkills({ personalInfo, defaultInfo }) {
  const hardSkillsList =
    personalInfo.hardSkills && personalInfo.hardSkills.length > 0
      ? personalInfo.hardSkills.split(",").map((item) => item.trim())
      : defaultInfo.hardSkills.split(",").map((item) => item.trim());

  const softSkillList =
    personalInfo.softSkills && personalInfo.softSkills.length > 0
      ? personalInfo.softSkills.split(",").map((item) => item.trim())
      : defaultInfo.softSkills.split(",").map((item) => item.trim());

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="hard-skills">
        <h3>Hard Skills</h3>
        <ul>
          {hardSkillsList.map((hskill, index) => (
            <li key={index}>{hskill}</li>
          ))}
        </ul>
      </div>
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          {softSkillList.map((sskill, index) => (
            <li key={index}>{sskill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ResumeSkills.propTypes = {
  personalInfo: PropTypes.shape({
    hardSkills: PropTypes.string,
    softSkills: PropTypes.string,
  }),
  defaultInfo: PropTypes.shape({
    hardSkills: PropTypes.string,
    softSkills: PropTypes.string,
  }),
};
