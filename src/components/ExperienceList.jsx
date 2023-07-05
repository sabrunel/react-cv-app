import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Experience from "./Experience";
import AddExperience from "./AddExperience";
import { MdAdd } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function ExperienceList({ data, updateData }) {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [allDisplay, setAllDisplay] = useState(false);
    const [experienceList, setExperienceList] = useState(data);

    function addExperience(title, startDate, endDate, company, location) {
      setExperienceList((currentList) => {
        return [
          ...currentList,
          {
            id: new Date().getTime(),
            title: title,
            startDate: startDate,
            endDate: endDate,
            company: company,
            location: location,
          }
        ];
      })
    }

    useEffect(() => {
      updateData(experienceList)
    }, [experienceList, updateData])

    function editExperience(id, newTitle, newStartDate, newEndDate, newCompany, newlocation) {
      setExperienceList((currentList) => {
        return currentList.map((experience) => {
          if (experience.id === id) {
            return {
              ...experience,
              title: newTitle,
              startDate: newStartDate,
              endDate: newEndDate,
              company: newCompany,
              location: newlocation,
            };
          }
          return experience;
        })
      })
    }

    function deleteExperience(id) {
      setExperienceList((currentList) => {
        return currentList.filter((experience) => experience.id !== id);
      })
    }

    const displayList = experienceList.sort((a,b) => {
      return b.startDate > a.startDate ? 1 : -1;
    }).map((experience) => {
      return (
          <Experience 
              key={experience.id}
              {...experience}
              editItem={editExperience}
              deleteItem={deleteExperience}
          />
        )
    })

    return (
        <section>
          <div className="main-header">
            <h2>Experience</h2>
            <button onClick={() => setModalDisplay(true)} aria-label="Add experience" className="add-btn"> <MdAdd/> </button>
          </div>
          <ul className="record-list">
            {allDisplay ? displayList : displayList.slice(0,5)}
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
            {modalDisplay && <AddExperience setModalDisplay={setModalDisplay} addItem={addExperience}/>}
        </section>
    )
}

ExperienceList.propTypes = {
  data: PropTypes.array,
  updateData: PropTypes.func
};