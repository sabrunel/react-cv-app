import { useState } from "react";
import Education from "./Education";
import AddEducation from "./AddEducation";

export default function EducationList() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [educationList, setEducationList] = useState([
        {
          "id": 1,
          "degree": "Bachelor's",
          "startDate": "1990-01-01",
          "endDate": "1993-01-01",
          "school": "Villain University",
          "location": "New York, USA"
        },
        {
          "id": 2,
          "degree": "Master's",
          "startDate": "1995-01-01",
          "endDate": "1997-01-01",
          "school": "Evil Institute of Technology",
          "location": "Gotham City, USA"
        },
        {
          "id": 3,
          "degree": "Ph.D.",
          "startDate": "2000-01-01",
          "endDate": "2005-01-01",
          "school": "Doom University",
          "location": "Latveria, Europe"
        }
      ]);

    function addEducation(degree, startDate, endDate, school, location) {
      setEducationList((currentList) => {
        return [
          ...currentList,
          {
            id: new Date().getTime(),
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            school: school,
            location: location,
          } 
        ];
      })
    }

    function editEducation(id, newDegree, newStartDate, newEndDate, newSchool, newLocation) {
      setEducationList((currentList) => {
        return currentList.map((education) => {
          if (education.id === id) {
            return {
              ...education,
              degree: newDegree,
              startDate: newStartDate,
              endDate: newEndDate,
              school: newSchool,
              location: newLocation
            };
          }

          return education;
        })
      })
    }

    function deleteEducation(id) {
      setEducationList((currentList) => {
        return currentList.filter((education) => education.id !== id);
      })
    }

    return (
        <section>
            <h2>Education</h2>
            <button onClick={() => setModalDisplay(true)}>Add education</button>
            <ul>
                {educationList.map((education) => {
                    return (
                        <Education
                            key={education.id}
                            {...education}
                            editItem={editEducation}
                            deleteItem={deleteEducation}
                        />
                    )
                })}
            </ul>
            {modalDisplay && <AddEducation setModalDisplay={setModalDisplay} addItem={addEducation}/>}
        </section>
    )
}