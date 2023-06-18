import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";
import Intro from "./components/Intro";
import PersonalInfo from "./components/PersonalInfo";
import SkillList from "./components/SkillList";
import mockData from "./mock-resume.json";
import { useState, useEffect } from "react";

export default function App() {
  const [appData, setAppData] = useState(() => {
    const localData = localStorage.getItem("RESUME");
    return localData == null ? mockData : JSON.parse(localData);
  });
  const [introData, setIntroData] = useState(appData.introduction);
  const [personalInfoData, setPersonalInfoData] = useState(appData.personalInformation);
  const [experienceData, setExperienceData] = useState(appData.experience);
  const [educationData, setEducationData] = useState(appData.education);
  const [skillsData, setSkillsData] = useState(appData.skills);

  // Update app data
  useEffect(() => {
    updateAppData(introData, personalInfoData, experienceData, educationData, skillsData);
  }, [introData, personalInfoData, experienceData, educationData, skillsData]);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem("RESUME", JSON.stringify(appData));
  }, [appData]);

  function updateAppData(tmpIntro, tmpPersonalInfo, tmpExperience, tmpEducation, tmpSkills) {
    setAppData((currentData) => {
      return {
        ...currentData,
        introduction: tmpIntro,
        personalInformation: tmpPersonalInfo,
        experience: tmpExperience,
        education: tmpEducation,
        skills: tmpSkills,
      }
    })
  }

  function updateIntro(updatedObject) {
    setIntroData(updatedObject);
  }

  function updatePersonalInfo(updatedObject) {
    setPersonalInfoData(updatedObject);
  }

  function updateExperience(updatedList) {
    setExperienceData(updatedList);
  }

  function updateEducation(updatedList) {
    setEducationData(updatedList);
  }

  function updateSkills(updatedList) {
    setSkillsData(updatedList);
  }

  return (
    <>
      <main>
          <Intro data={introData} updateData={updateIntro}/>
          <ExperienceList data={experienceData} updateData={updateExperience}/>
          <EducationList data={educationData} updateData={updateEducation}/> 
      </main>
      <aside>
        <PersonalInfo data={personalInfoData} updateData={updatePersonalInfo}/>
        <SkillList data={skillsData} updateData={updateSkills}/>
      </aside>
    </>
  );
}
