import PropTypes from "prop-types";

export default function Skills({
  personalInfo,
  handlePersonalInfo,
  isActive,
  onShow,
}) {
  return (
    <div className="form-container">
      <h3>Skills</h3>
      {isActive ? (
        <form action="" method="get" className="form skills">
          <label htmlFor="softSkills">add soft skills</label>
          <input
            type="text"
            name="softSkills"
            placeholder="Add your soft skills separated with coma"
            value={personalInfo.softSkills} // This should lead to bugs because softSkills and hardSkills are arrays?
            onChange={handlePersonalInfo}
          />
          <div className="button-container"></div>
          <label htmlFor="hardSkills">add hard skills</label>
          <input
            type="text"
            name="hardSkills"
            placeholder="Add your hard skills separated with coma"
            value={personalInfo.hardSkills} // This should lead to bugs because softSkills and hardSkills are arrays?
            onChange={handlePersonalInfo}
          />
          <div className="button-container"></div>
        </form>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}

Skills.propTypes = {
  personalInfo: PropTypes.shape({
    softSkills: PropTypes.string,
    hardSkills: PropTypes.string,
  }),
  handlePersonalInfo: PropTypes.func.isRequired,
};
