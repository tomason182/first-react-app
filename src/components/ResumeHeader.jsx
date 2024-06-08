import { MdAlternateEmail, MdOutlinePhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ResumeHeader() {
  return (
    <>
      <h1 className="full-name">Sergeant García</h1>
      <ul>
        <li>
          <MdOutlinePhone />
          <span>+1234567890</span>
        </li>
        <li>
          <MdAlternateEmail />
          <span>sgtGarcia@example.com</span>
        </li>
        <li>
          <FaLinkedin />
          <span>linkedin.com/sgt-garcia</span>
        </li>
        <li>
          <FaLocationDot />
          <span>Monterey - CA</span>
        </li>
      </ul>
    </>
  );
}
