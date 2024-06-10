export default function Skills({ personalInfo, handlePersonalInfo }) {
  return (
    <>
      <form action="" method="get" className="form skills">
        <fieldset>
          <legend>Skills</legend>
          <label htmlFor="softSkills">add soft skills</label>
          <input
            type="text"
            name="softSkills"
            placeholder="Add your soft skills separated with coma"
            value={personalInfo.softskill}
            onChange={handlePersonalInfo}
          />
          <div className="button-container"></div>
          <label htmlFor="hardSkills">add hard skills</label>
          <input
            type="text"
            name="hardSkills"
            placeholder="Add your hard skills separated with coma"
            value={personalInfo.hardSkills}
            onChange={handlePersonalInfo}
          />
          <div className="button-container"></div>
        </fieldset>
      </form>
    </>
  );
}
