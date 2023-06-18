import EditExperience from "./EditExperience";
import { useState } from "react";
import { MdEditNote, MdDeleteOutline } from "react-icons/md";
import PropTypes from 'prop-types';

export default function Experience({id, title, startDate, endDate, company, location, editItem, deleteItem}) {
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
                    <h3> {title} </h3>
                    <p className="date-text"> {startDate} - {endDate} </p>
                    <p> {company} </p>
                    <p> {location} </p>
                </div>
                {optionsDisplay && <div className="record-options">
                    <button onClick={() => setModalDisplay(true)} aria-label="edit item"> <MdEditNote/> </button>
                    <button onClick={() => deleteItem(id)} aria-label="delete item"> <MdDeleteOutline/> </button>
                </div>}
            </article>
            {modalDisplay && <EditExperience
                setModalDisplay={setModalDisplay}
                id={id}
                title={title}
                startDate={startDate}
                endDate={endDate}
                company={company}
                location={location}
                editItem={editItem}
                />
            }
        </li>
    )
}

Experience.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    startDate: PropTypes.string, 
    endDate: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string, 
    editItem: PropTypes.func, 
    deleteItem: PropTypes.func,
};