import { useState } from "react";
import Experience from "./Experience";
import AddExperience from "./AddExperience";

export default function ExperienceList() {
    const [modalDisplay, setModalDisplay] = useState(false);
    const [experienceList, setExperienceList] = useState([
        {
          "id": 1,
          "title": "Chief Evil Officer",
          "startDate": "2003-03-03",
          "endDate": "2005-03-03",
          "company": "Sinister Corporation",
          "location": "Madripoor, Southeast Asia"
        },
        {
          "id": 2,
          "title": "Lead Henchman",
          "startDate": "2006-06-06",
          "endDate": "2007-06-06",
          "company": "Hydra Organization",
          "location": "Unknown"
        },
        {
          "id": 3,
          "title": "Director of Mischief",
          "startDate": "2009-09-09",
          "endDate": "2012-09-09",
          "company": "Loki Enterprises",
          "location": "Asgard"
        }
      ]);

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

    return (
        <section>
            <h2>Experience</h2>
            <button onClick={() => setModalDisplay(true)}> Add experience </button>
            <ul>
                {experienceList.map((experience) => {
                    return (
                        <Experience 
                            key={experience.id}
                            {...experience}
                            editItem={editExperience}
                            deleteItem={deleteExperience}
                        />
                    )
                })}
            </ul>
            {modalDisplay && <AddExperience setModalDisplay={setModalDisplay} addItem={addExperience}/>}
        </section>
    )
}