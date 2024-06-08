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
        <ul className="hard-skills">
          <li>Basic Swordsmanship</li>
          <li>Patrolling and Surveillance</li>
          <li>Military Administration</li>
          <li>Culinary Skills</li>
          <li>Basic First Aid</li>
        </ul>
        <ul className="soft-skills">
          <li>Empathy and Friendliness</li>
          <li>Perseverance</li>
          <li>Conflict Resolution</li>
          <li>Communication</li>
          <li>Loyalty</li>
        </ul>
      </div>
      <div className="experience"></div>
      <h2>Experience</h2>
      <h3>Royal Spanish Army</h3>

      <h4>Sergeant</h4>
      <p>1809 - Present</p>
      <ul>
        <li>
          Supervised and led a spirited team of soldiers, ensuring daily patrols
          and law enforcement with a touch of humor.
        </li>
        <li>
          Coordinated with local authorities and citizens, maintaining public
          order with warmth and a hearty laugh.
        </li>
        <li>
          Conducted investigations into criminal activities, reporting findings
          with honesty and a bit of clumsiness.
        </li>
        <li>
          Maintained detailed records of incidents, arrests, and daily
          activities (often with humorous anecdotes).
        </li>
      </ul>
      <h4>Assistant to Commandante</h4>
      <p>1807 - 1809</p>
      <ul>
        <li>
          Assisted the commandante with administrative duties, ensuring all
          reports were filed (sometimes in the right place).
        </li>
        <li>
          Acted as liaison between the commandante and soldiers, communicating
          orders with enthusiasm and clarity.
        </li>
        <li>
          Acted as liaison between the commandante and soldiers, communicating
          orders with enthusiasm and clarity.
        </li>
      </ul>

      <div className="education"></div>
      <div className="courses"></div>
      <div className="hobbies"></div>
    </>
  );
}
