import { useState } from "react";
import Education from "./Education";
import AddEducation from "./AddEducation";
import { MdAdd } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function EducationList() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [allDisplay, setAllDisplay] = useState(false);
    const [educationList, setEducationList] = useState([
      {
        "id": 1,
        "degree": "High School Diploma",
        "startDate": "01-01-1985",
        "endDate": "01-01-1989",
        "school": "Evil Academy",
        "location": "Shadowville, USA"
      },
      {
        "id": 2,
        "degree": "Associate's",
        "startDate": "01-01-1990",
        "endDate": "01-01-1992",
        "school": "Dark Institute",
        "location": "Nightfall City, USA"
      },
      {
        "id": 3,
        "degree": "Bachelor's",
        "startDate": "01-01-1990",
        "endDate": "01-01-1993",
        "school": "Villain University",
        "location": "New York, USA"
      },
      {
        "id": 4,
        "degree": "Master's",
        "startDate": "01-01-1995",
        "endDate": "01-01-1997",
        "school": "Evil Institute of Technology",
        "location": "Gotham City, USA"
      },
      {
        "id": 5,
        "degree": "Ph.D.",
        "startDate": "01-01-2000",
        "endDate": "01-01-2005",
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
        ]
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


    const displayList = educationList.sort((a,b) => {
      return b.startDate > a.startDate ? 1 : -1;
    }).map((education) => {
      return (
          <Education
              key={education.id}
              {...education}
              editItem={editEducation}
              deleteItem={deleteEducation}
          />
        )
    });

    return (
        <section>
          <header className="section-header">
            <h2>Education</h2>
            <button onClick={() => setModalDisplay(true)} aria-label="Add education" className="add-btn"> <MdAdd/> </button>
          </header>
          <ul className="record-list">
            {allDisplay ? displayList : displayList.slice(0,3) }
          </ul>
          <footer className="section-footer">
            {displayList.length > 3 &&
              <button onClick={() => setAllDisplay(!allDisplay)}> {
                allDisplay 
                ? <><BsChevronUp/><span>Show less</span></>
                : <><BsChevronDown/><span>Show more</span></>
                } 
              </button>
            }
          </footer>
          {modalDisplay && <AddEducation setModalDisplay={setModalDisplay} addItem={addEducation}/>}
        </section>
    )
}