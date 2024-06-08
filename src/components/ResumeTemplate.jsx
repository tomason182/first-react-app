import ResumeHeader from "./ResumeHeader";
import ResumeMain from "./ResumeMain";

export default function ResumeTemplate() {
  return (
    <div className="resume-body">
      <ResumeHeader />
      <ResumeMain />
    </div>
  );
}
