import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function EditSkills({setModalDisplay, tagList, updateList}){
    const [tempList, setTempList] = useState(tagList);
    const [label, setLabel] = useState("");

    function updateListHandler() {
        updateList(tempList);
        setModalDisplay(false);
    }

    function submitHandler(e) {
        e.preventDefault();
        addTag(label);
    }

    function addTag(label) {
        setTempList((currentList) => {
            return [
                ...currentList,
                {id: new Date().getTime(),
                label: label}
            ]
        })

        setLabel("");
    }

    function deleteTag(id) {
        setTempList((currentList) => {
            return currentList.filter((skill) => skill.id !== id)
        })
    }

    return (
        <>
            <div className="backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h2>Edit skills</h2>
                        <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                    </div>
                    <div className="modal-body">
                        <div className="tags-container">
                        {tempList.map((tag) => (
                            <div key={tag.id} className="skill-tag">
                                {tag.label}
                                <button onClick={() => deleteTag(tag.id)}> <MdClose/></button>
                            </div>
                            ))
                        }
                        </div>
                        <form action="" onSubmit={submitHandler} id="edit-skills-form">
                            <div className="form-group">
                                <label htmlFor="tag-label">Add skill</label>
                                <input type="text" id="tag-label" value={label} onChange={(e) => setLabel(e.target.value)} />
                                <p className="info-text">Press enter to add a new skill</p>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel modications">Cancel</button>
                        <button onClick={updateListHandler} aria-label="confirm modications">Update</button>
                    </div>
                </div>
            </div>
        </>
       
    )
}

EditSkills.propTypes = {
    setModalDisplay: PropTypes.func,
    tagList: PropTypes.array,
    updateList: PropTypes.func,
}