import ResumeHeader from "./ResumeHeader";
import ResumeSummary from "./ResumeSummary";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeCourses from "./ResumeCourses";
import ResumeHobbies from "./ResumeHobbies";

export default function ResumeTemplate() {
  return (
    <div className="resume-body">
      <ResumeHeader />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeEducation />
      <ResumeCourses />
      <ResumeHobbies />
    </div>
  );
}
