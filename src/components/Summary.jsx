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
