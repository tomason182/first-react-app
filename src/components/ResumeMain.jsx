import "../styles/resume-template.css";

export default function ResumeMain() {
  return (
    <>
      <div className="summary">
        <h2>Summary</h2>
        <p>
          Warm-hearted and dedicated Sergeant in the Royal Spanish Army with
          over a decade of service in Los Angeles. Known for my friendly
          demeanor, unwavering loyalty, and knack for turning everyday
          situations into comedic adventures. While I might not always catch the
          cunning Zorro, my passion for duty and love for the community shine
          through. Seeking a position in the esteemed household of Don Diego de
          la Vega where I can bring joy, security, and perhaps a delicious meal
          or two.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <figure>
          <figcaption>
            <b>Leadership:</b>
          </figcaption>
          <ul>
            <li>Leadership</li>
            <li>Conflict resolution</li>
            <li>Surveillance</li>
            <li>Swordsmanship</li>
            <li>Communication</li>
            <li>Culinary Arts</li>
          </ul>
        </figure>
      </div>
      <div className="experience"></div>
      <div className="education"></div>
      <div className="courses"></div>
      <div className="hobbies"></div>
    </>
  );
}
