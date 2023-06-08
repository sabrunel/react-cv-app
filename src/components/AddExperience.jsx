import { useState } from "react";

export default function AddExperience({setModalDisplay, addItem}) {
    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState(new Date().toJSON().slice(0, 10));
    const [endDate, setEndDate] = useState(new Date().toJSON().slice(0, 10));
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");

    function submitHandler(e) {
        e.preventDefault();
        addItem(title, startDate, endDate, company, location);
        setModalDisplay(false);
    }

    return (
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Add experience</h2>
                    <button onClick={() => setModalDisplay(false)}> X </button>
                </div>
                <div className="modal-body">
                    <form action="" id="add-experience-form" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-date">Start date</label>
                            <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End date</label>
                            <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={() => setModalDisplay(false)}>Cancel</button>
                    <button type="submit" form="add-experience-form">Add</button>
                </div>
            </div>
        </>
    )
}