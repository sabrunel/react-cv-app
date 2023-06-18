import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import EditSkills from "./EditSkills";
import { MdEditNote } from "react-icons/md";

export default function SkillList({ data, updateData }) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [skillList, setSkillList] = useState(data);

    function updateList(updatedList) {
        setSkillList(updatedList);
        updateData(skillList);
    }

    useEffect(() => {
        updateData(skillList)
      }, [skillList, updateData])
    
    return (
        <>
            <section className="skill-section">
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

SkillList.propTypes = {
    data: PropTypes.array,
    updateData: PropTypes.func
  };