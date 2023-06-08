import EditEducation from "./EditEducation";
import { useState } from "react";

export default function Education({id, degree, startDate, endDate, school, location, editItem, deleteItem}) {
    const [modalDisplay, setModalDisplay] = useState(false);

    return(
        <li>
            <div>
                <h3> {degree} </h3>
                <p> {startDate} - {endDate} </p>
                <p> {school} </p>
                <p> {location} </p>
            </div>
            <button onClick={() => setModalDisplay(true)}> Edit </button>
            <button onClick={() => deleteItem(id)}> Delete </button>
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