import { MdAlternateEmail, MdOutlinePhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function ResumeHeader({ personalInfo, defaultInfo }) {
  const infoToDisplay = {
    fullName: personalInfo.fullName || defaultInfo.fullName,
    phoneNumber: personalInfo.phoneNumber || defaultInfo.phoneNumber,
    email: personalInfo.email || defaultInfo.email,
    social: personalInfo.social || defaultInfo.social,
    region: personalInfo.region || defaultInfo.region,
  };
  return (
    <div className="resume-header">
      <h1>{infoToDisplay.fullName}</h1>
      <ul>
        <li>
          <MdOutlinePhone />
          <span>{infoToDisplay.phoneNumber}</span>
        </li>
        <li>
          <MdAlternateEmail />
          <span>{infoToDisplay.email}</span>
        </li>
        <li>
          <FaLinkedin />
          <span>{infoToDisplay.social}</span>
        </li>
        <li>
          <FaLocationDot />
          <span>{infoToDisplay.region}</span>
        </li>
      </ul>
    </div>
  );
}

ResumeHeader.propTypes = {
  personalInfo: PropTypes.shape({
    fullName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
  defaultInfo: PropTypes.shape({
    fullName: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};
