import PersonalInfo from "../components/PersonalInfo";
import SkillList from "../components/SkillList";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Aside() {
    const { personalInfoData, skillsData, updatePersonalInfo, updateSkills } = useContext(AppContext);

    return (
        <aside>
            <PersonalInfo data={personalInfoData} updateData={updatePersonalInfo}/>
            <SkillList data={skillsData} updateData={updateSkills}/>
        </aside>
    )
}