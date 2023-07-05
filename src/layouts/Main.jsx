import Intro from "../components/Intro";
import ExperienceList from "../components/ExperienceList";
import EducationList from "../components/EducationList";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Main() {
    const { introData, experienceData, educationData, updateIntro, updateExperience, updateEducation } = useContext(AppContext);

    return (
        <main>
            <Intro data={introData} updateData={updateIntro}/>
            <ExperienceList data={experienceData} updateData={updateExperience}/>
            <EducationList data={educationData} updateData={updateEducation}/> 
        </main>
    )
}