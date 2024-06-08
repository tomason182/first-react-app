import { MdAlternateEmail, MdOutlinePhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ResumeHeader() {
  return (
    <>
      <h1 className="full-name">Sergeant García</h1>
      <ul>
        <li>
          <MdOutlinePhone /> +1234567890
        </li>
        <li>
          <MdAlternateEmail /> sgtGarcia@example.com
        </li>
        <li>
          <FaLinkedin />
          linkedin.com/sgt-garcia
        </li>
        <li>
          <FaLocationDot />
          Monterey - CA
        </li>
      </ul>
    </>
  );
}
