export default function Education({degree, startDate, endDate, school, location}) {
    return(
        <li>
            <div>
                <h3> {degree} </h3>
                <p> {startDate} - {endDate} </p>
                <p> {school} </p>
                <p> {location} </p>
            </div>
            <button> Edit </button>
        </li>
    )
}