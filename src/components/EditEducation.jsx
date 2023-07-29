import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';

export default function EditEducation({setModalDisplay, id, degree, startDate, endDate, school, location, editItem}) {
    const [newDegree, setNewDegree] = useState(degree);
    const [newStartDate, setNewStartDate] = useState(startDate);
    const [newEndDate, setNewEndDate] = useState(endDate);
    const [newSchool, setNewSchool] = useState(school);
    const [newLocation, setNewLocation] = useState(location);
    
    function submitHandler(e) {
        e.preventDefault();
        editItem(id, newDegree, newStartDate, newEndDate, newSchool, newLocation);
        setModalDisplay(false);
    }
    return (
        <>
            <div className="backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h2>Edit education</h2>
                        <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                    </div>
                    <div className="modal-body">
                        <form action="" id="edit-education-form" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" value={newDegree} onChange={(e) => setNewDegree(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-date">Start date</label>
                                <input type="date" id="start-date" value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">End date</label>
                                <input type="date" id="end-date" value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input type="text" id="school" value={newSchool} onChange={(e) => setNewSchool(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel modications">Cancel</button>
                        <button type="submit" form="edit-education-form" aria-label="confirm modications">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

EditEducation.propTypes = {
    setModalDisplay: PropTypes.func,
    id: PropTypes.number,
    degree: PropTypes.number,
    startDate: PropTypes.string, 
    endDate: PropTypes.string,
    school: PropTypes.string,
    location: PropTypes.string, 
    editItem: PropTypes.func,
};