export default function Skills() {
  return (
    <>
      <form action="" method="get" className="form skills">
        <fieldset>
          <legend>Skills</legend>
          <label htmlFor="soft-skills">add soft skills</label>
          <input
            type="text"
            name="soft-skills"
            placeholder="Add your soft skills separated with coma"
          />
          <div className="button-container"></div>
          <label htmlFor="hard-skills">add hard skills</label>
          <input
            type="text"
            name="hard-skills"
            placeholder="Add your hard skills separated with coma"
          />
          <div className="button-container"></div>
        </fieldset>
      </form>
    </>
  );
}
