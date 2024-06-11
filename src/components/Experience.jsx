export default function Experience() {
  return (
    <div className="form-container">
      <h3>Experience</h3>
      <button>Display</button>
      <form action="get" className="form experience">
        <div className="form-input-container">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" />
        </div>
        <div className="form-input-container">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" />
        </div>
        <div className="form-input-container">
          <label htmlFor="dates">Dates</label>
          <input type="text" name="dates" id="dates" />
        </div>
        <div className="form-input-container">
          <label htmlFor="task">Tasks</label>
          <input type="text" name="task" id="task" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
