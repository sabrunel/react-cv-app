import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';

export default function EditExperience({setModalDisplay, id, title, startDate, endDate, company, location, editItem}) {
    const [newTitle, setNewTitle] = useState(title);
    const [newStartDate, setNewStartDate] = useState(startDate);
    const [newEndDate, setNewEndDate] = useState(endDate);
    const [newCompany, setNewCompany] = useState(company);
    const [newLocation, setNewLocation] = useState(location);
    
    function submitHandler(e) {
        e.preventDefault();
        editItem(id, newTitle, newStartDate, newEndDate, newCompany, newLocation);
        setModalDisplay(false);
    }

    return (
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Edit experience</h2>
                    <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                </div>
                <div className="modal-body">
                    <form action="" id="edit-experience-form" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-date">Start date</label>
                            <input type="date" id="start-date" value={newStartDate} onChange={(e) => setNewStartDate(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End date</label>
                            <input type="date" id="end-date" value={newEndDate} onChange={(e) => setNewEndDate(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" value={newCompany} onChange={(e) => setNewCompany(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)}/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel modications">Cancel</button>
                    <button type="submit" form="edit-experience-form" aria-label="confirm modications">Update</button>
                </div>
            </div>
        </>
        
    )
}

EditExperience.propTypes = {
    setModalDisplay: PropTypes.func,
    id: PropTypes.number,
    title: PropTypes.number,
    startDate: PropTypes.string, 
    endDate: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string, 
    editItem: PropTypes.func,
};