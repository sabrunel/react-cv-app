import { useState } from "react";
import EditSkills from "./EditSkills";
import { MdEditNote } from "react-icons/md";

export default function SkillList() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [skillList, setSkillList] = useState([
        {id: 1, label:"Mastermind Strategist"},
        {id: 2, label:"Expert Manipulator"},
        {id: 3, label:"Advanced Combat Training"},
        {id: 4, label:"Mastery of Dark Arts"},
        {id: 5, label:"Genius-level Intellect"},
      ])

    function updateList(updatedList) {
        setSkillList(updatedList);
    }
    
    return (
        <>
            <section>
                <header className="aside-header">
                    <h3>Skills</h3>
                    <button onClick={() => setModalDisplay(true)} aria-label="edit skills"> <MdEditNote/> </button>
                </header>  
                <ul className="skill-list">
                    {skillList.map((skill) => {
                        return (
                            <li key={skill.id}>
                                <p>{skill.label}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
            {modalDisplay && <EditSkills
                setModalDisplay={setModalDisplay}
                tagList={skillList}
                updateList={updateList}
                />
            }
        </>
        
    )

}