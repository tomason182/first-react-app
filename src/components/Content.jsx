import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Skills from "./Skills";
import ResumeContainer from "./ResumenContainer.jsx";
import "../styles/form-style.css";
import { useState } from "react";

export default function Content() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    social: "",
    region: "",
    summary: "",
    softSkills: "",
    hardSkills: "",
  });

  const [displayBtn, setDisplayBtn] = useState(false);

  function handleDisplayBtn() {
    setDisplayBtn(!displayBtn);
  }

  const defaultInfo = {
    fullName: "Sergeant Garcia",
    phoneNumber: "6380465",
    email: "sgtgarcia@example.com",
    social: "linkedin.com/sgtgarcia",
    region: "United States - CA",
    summary:
      "Warm-hearted and dedicated Sergeant in the Royal Spanish Army with over a decade of service in Los Angeles. Known for my friendly demeanor, unwavering loyalty, and knack for turning everyday situations into comedic adventures. While I might not always catch the cunning Zorro, my passion for duty and love for the community shine through. Seeking a position in the esteemed household of Don Diego de la Vega where I can bring joy, security, and perhaps a delicious meal or two.",
    hardSkills:
      "Basic Swordsmanship, Patrolling and Surveillance, Military Administration, Culinary Skills, Basic First Aid",
    softSkills:
      "Empathy and Friendliness, Perseverance, Conflict Resolution, Communication, Loyalty",
  };

  function handlePersonalInfo(e) {
    const { name, value } = e.target;

    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  return (
    <div className="content">
      <div className="filling-container">
        <PersonalInfo
          personalInfo={personalInfo}
          handlePersonalInfo={handlePersonalInfo}
          defaultInfo={defaultInfo}
          displayBtn={displayBtn}
          handleDisplayBtn={handleDisplayBtn}
        />
        <Summary
          personalInfo={personalInfo}
          handlePersonalInfo={handlePersonalInfo}
        />
        <Skills
          personalInfo={personalInfo}
          handlePersonalInfo={handlePersonalInfo}
        />
      </div>
      <ResumeContainer personalInfo={personalInfo} defaultInfo={defaultInfo} />
    </div>
  );
}
