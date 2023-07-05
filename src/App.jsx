import mockData from "./mock-resume.json";
import { useState, useEffect, createContext } from "react";
import Header from "./layouts/Header";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

export const AppContext = createContext();

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
        <Header data={appData}/>
        <AppContext.Provider  value={{
          introData,
          personalInfoData, 
          skillsData,
          experienceData,
          educationData,
          updateIntro, 
          updatePersonalInfo, 
          updateSkills,
          updateExperience,
          updateEducation
          }}>
            <Main/>
            <Aside/>
        </AppContext.Provider>
    </>
  );
}
