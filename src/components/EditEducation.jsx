import { useState } from "react";

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
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Edit education</h2>
                    <button onClick={() => setModalDisplay(false)}> X </button>
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
                    <button onClick={() => setModalDisplay(false)}>Cancel</button>
                    <button type="submit" form="edit-education-form">Update</button>
                </div>
            </div>
        </>
    )
}