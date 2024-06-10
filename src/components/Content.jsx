import PersonalInfo from "./PersonalInfo";
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
  });

  const defaultInfo = {
    fullName: "Sergeant Garcia",
    phoneNumber: "6380465",
    email: "sgtgarcia@example.com",
    social: "linkedin.com/sgtgarcia",
    region: "United States - CA",
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
      </div>
      <ResumeContainer personalInfo={personalInfo} defaultInfo={defaultInfo} />
    </div>
  );
}
