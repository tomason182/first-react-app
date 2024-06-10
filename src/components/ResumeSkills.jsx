export default function ResumeSkills({ personalInfo, defaultInfo }) {
  const hardSkillsList =
    personalInfo.hardSkills.lenght > 0 || defaultInfo.hardSkills;
  const softSkillList =
    personalInfo.softSkills.lenght > 0 || defaultInfo.softSkills;

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="hard-skills">
        <h3>Hard Skills</h3>
        <ul>
          {hardSkillsList.map((hskill) => (
            <li>{hskill}</li>
          ))}
        </ul>
      </div>
      <div className="soft-skills">
        <h3>Soft Skills</h3>
        <ul>
          {softSkillList.map((sSkill) => (
            <li>{sSkill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
