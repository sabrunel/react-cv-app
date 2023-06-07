export default function Experience({title, startDate, endDate, company, location}) {
    return(
        <li>
            <div>
                <h3> {title} </h3>
                <p> {startDate} - {endDate} </p>
                <p> {company} </p>
                <p> {location} </p>
            </div>
            <button> Edit </button>
        </li>
    )
}