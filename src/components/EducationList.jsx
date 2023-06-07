import { useState } from "react";
import Education from "./Education";

export default function EducationList() {
    const [educationList, setEducationList] = useState([
        {
          "id": 1,
          "degree": "Bachelor's",
          "startDate": "01-01-1990",
          "endDate": "01-01-1993",
          "school": "Villain University",
          "location": "New York, USA"
        },
        {
          "id": 2,
          "degree": "Master's",
          "startDate": "01-01-1995",
          "endDate": "01-01-1997",
          "school": "Evil Institute of Technology",
          "location": "Gotham City, USA"
        },
        {
          "id": 3,
          "degree": "Ph.D.",
          "startDate": "01-01-2000",
          "endDate": "01-01-2005",
          "school": "Doom University",
          "location": "Latveria, Europe"
        }
      ]);

    return (
        <section>
            <h2>Education</h2>
            <ul>
                {educationList.map((education) => {
                    return (
                        <Education
                            key={education.id}
                            {...education}
                        />
                    )
                })}
            </ul>
        </section>
    )
}