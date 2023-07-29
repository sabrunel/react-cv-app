import { useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from 'prop-types';

export default function AddEducation({setModalDisplay, addItem}) {
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState(new Date().toJSON().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toJSON().slice(0, 10));
    const [school, setSchool] = useState("");
    const [location, setLocation] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        addItem(degree, startDate, endDate, school, location);
        setModalDisplay(false);
    }

    return (
        <>
            <div className="backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h2>Add education</h2>
                        <button onClick={() => setModalDisplay(false)} aria-label="close modal"> <MdClose/> </button>
                    </div>
                    <div className="modal-body">
                        <form action="" onSubmit={submitHandler} id="add-education-form">
                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-date">Start date</label>
                                <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-date">End date</label>
                                <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input type="text" id="school" value={school} onChange={(e) => setSchool(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="cancel-btn" onClick={() => setModalDisplay(false)} aria-label="cancel addition">Cancel</button>
                        <button type="submit" form="add-education-form" aria-label="confirm addition">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

AddEducation.propTypes = {
    setModalDisplay: PropTypes.func,
    addItem: PropTypes.func,
};