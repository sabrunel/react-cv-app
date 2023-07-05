import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Education from "./Education";
import AddEducation from "./AddEducation";
import { MdAdd } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function EducationList({ data, updateData }) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [allDisplay, setAllDisplay] = useState(false);
    const [educationList, setEducationList] = useState(data);

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

    useEffect(() => {
      updateData(educationList)
    }, [educationList, updateData])

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
          <div className="main-header">
            <h2>Education</h2>
            <button onClick={() => setModalDisplay(true)} aria-label="Add education" className="add-btn"> <MdAdd/> </button>
          </div>
          <ul className="record-list">
            {allDisplay ? displayList : displayList.slice(0,3) }
          </ul>
          <div className="main-footer">
            {displayList.length > 3 &&
              <button onClick={() => setAllDisplay(!allDisplay)}> {
                allDisplay 
                ? <><BsChevronUp/><span>Show less</span></>
                : <><BsChevronDown/><span>Show more</span></>
                } 
              </button>
            }
          </div>
          {modalDisplay && <AddEducation setModalDisplay={setModalDisplay} addItem={addEducation}/>}
        </section>
    )
}

EducationList.propTypes = {
  data: PropTypes.array,
  updateData: PropTypes.func
};