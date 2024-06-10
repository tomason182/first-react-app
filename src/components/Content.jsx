import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
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
  });

  const defaultInfo = {
    fullName: "Sergeant Garcia",
    phoneNumber: "6380465",
    email: "sgtgarcia@example.com",
    social: "linkedin.com/sgtgarcia",
    region: "United States - CA",
    summary:
      "Warm-hearted and dedicated Sergeant in the Royal Spanish Army with over a decade of service in Los Angeles. Known for my friendly demeanor, unwavering loyalty, and knack for turning everyday situations into comedic adventures. While I might not always catch the cunning Zorro, my passion for duty and love for the community shine through. Seeking a position in the esteemed household of Don Diego de la Vega where I can bring joy, security, and perhaps a delicious meal or two.",
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
        />
        <Summary
          personalInfo={personalInfo}
          handlePersonalInfo={handlePersonalInfo}
        ></Summary>
      </div>
      <ResumeContainer personalInfo={personalInfo} defaultInfo={defaultInfo} />
    </div>
  );
}
