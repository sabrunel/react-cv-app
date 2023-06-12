import ExperienceList from "./components/ExperienceList";
import EducationList from "./components/EducationList";
import Intro from "./components/Intro";
import PersonalInfo from "./components/PersonalInfo";
import SkillList from "./components/SkillList";

export default function App() {

  return (
    <>
      <header>
        <Intro/>
      </header>
      <aside>
        <PersonalInfo/>
        <SkillList/>
        </aside>
      <main>
        <ExperienceList/>
        <EducationList/>
      </main>
    </>
  );
}
