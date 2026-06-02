import Sidebar from "../components/Sidebar";
import { useState } from "react";

import PersonalForm from "../ResumeForm/PersonalForm";
import EducationForm from "../ResumeForm/EducationForm";
import ExperienceForm from "../ResumeForm/ExperienceForm";
import ProjectForm from "../ResumeForm/ProjectForm";
import SkillsForm from "../ResumeForm/SkillsForm";

import ResumePreview from "../ResumePreview/PersonalSection";
import EducationSection from "../ResumePreview/EducationSection";
import ExperienceSection from "../ResumePreview/ExperienceSection";
import ProjectSection from "../ResumePreview/ProjectSection";
import SkillsSection from "../ResumePreview/SkillsSection";

export default function BuilderPage() {
  const [active, setActive] = useState("");

  const selectedTemplate = JSON.parse(
  localStorage.getItem("selectedTemplate")
);

console.log(selectedTemplate);

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar setActive={setActive} />

      {/* LEFT SIDE - FORMS */}
      <div className="w-1/2 p-6 overflow-y-auto bg-white border-r">

        {active === "personal" && <PersonalForm />}
        {active === "education" && <EducationForm />}
        {active === "experience" && <ExperienceForm />}
        {active === "projects" && <ProjectForm />}
        {active === "skills" && <SkillsForm />}

      </div>

      {/* RIGHT SIDE - PREVIEW */}
      <div className="w-1/2 p-6 overflow-y-auto space-y-6">

        <ResumePreview />

        {/* {active === "personal" && <ResumePreview />} */}

        {active === "education" && <EducationSection />}
        {active === "experience" && <ExperienceSection />}
        {active === "projects" && <ProjectSection />}
        {active === "skills" && <SkillsSection />}

      </div>

    </div>
  );
}