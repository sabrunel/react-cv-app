import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';

export default function EditIntro({setModalDisplay, name, title, about, editItem}) {
    const [newName, setNewName] = useState(name);
    const [newTitle, setNewTitle] = useState(title);
    const [newAbout, setNewAbout] = useState(about);
    
    function submitHandler(e) {
        e.preventDefault();
        editItem(newName, newTitle, newAbout);
        setModalDisplay(false);
    }
    return (
        <>
            <div className="backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h2>Edit intro</h2>
                        <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                    </div>
                    <div className="modal-body">
                        <form action="" id="edit-intro-form" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Current position</label>
                                <input type="text" id="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">About</label>
                                <input type="text" id="desription" value={newAbout} onChange={(e) => setNewAbout(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel modications">Cancel</button>
                        <button type="submit" form="edit-intro-form" aria-label="confirm modications">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

EditIntro.propTypes = {
    setModalDisplay: PropTypes.func,
    name: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
    editItem: PropTypes.func,
};