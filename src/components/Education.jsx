import EditEducation from "./EditEducation";
import { useState } from "react";
import { MdEditNote, MdDeleteOutline } from "react-icons/md";
import PropTypes from 'prop-types';

export default function Education({id, degree, startDate, endDate, school, location, editItem, deleteItem}) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [optionsDisplay, setOptionsDisplay] = useState(false);

    return(
        <li>
            <article 
            className="record-card"
            onClick={() => optionsDisplay === false && setOptionsDisplay(!optionsDisplay)} // Toggle options when the hover conditon isn't met (eg. mobile)
            onMouseOver={() => setOptionsDisplay(true)} 
            onMouseOut={() => setOptionsDisplay(false)}>
                <div className="record-content">
                    <h3> {degree} </h3>
                    <p className="date-text"> {startDate} - {endDate} </p>
                    <p> {school} </p>
                    <p> {location} </p>
                </div>
                {optionsDisplay && <div className="record-options">
                    <button onClick={() => setModalDisplay(true)} aria-label="edit item"> <MdEditNote/> </button>
                    <button onClick={() => deleteItem(id)} aria-label="delete item"> <MdDeleteOutline/> </button>
                </div>} 
            </article>
            {modalDisplay && <EditEducation 
                setModalDisplay={setModalDisplay}
                id={id}
                degree={degree}
                startDate={startDate}
                endDate={endDate}
                school={school}
                location={location}
                editItem={editItem}
                />
            }
        </li>
    )
}

Education.propTypes = {
    id: PropTypes.number,
    degree: PropTypes.string,
    startDate: PropTypes.string, 
    endDate: PropTypes.string,
    school: PropTypes.string,
    location: PropTypes.string, 
    editItem: PropTypes.func, 
    deleteItem: PropTypes.func,
};