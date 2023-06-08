import EditExperience from "./EditExperience";
import { useState } from "react";

export default function Experience({id, title, startDate, endDate, company, location, editItem, deleteItem}) {
    const [modalDisplay, setModalDisplay] = useState(false);

    return(
        <li>
            <div>
                <h3> {title} </h3>
                <p> {startDate} - {endDate} </p>
                <p> {company} </p>
                <p> {location} </p>
            </div>
            <button onClick={() => setModalDisplay(true)}> Edit </button>
            <button onClick={() => deleteItem(id)}> Delete </button>
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