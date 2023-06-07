import { useState } from "react";
import Experience from "./Experience";

export default function ExperienceList() {

    const [experienceList, setExperienceList] = useState([
        {
          "id": 1,
          "title": "Chief Evil Officer",
          "startDate": "03-03-2003",
          "endDate": "03-03-2005",
          "company": "Sinister Corporation",
          "location": "Madripoor, Southeast Asia"
        },
        {
          "id": 2,
          "title": "Lead Henchman",
          "startDate": "06-06-2006",
          "endDate": "06-06-2007",
          "company": "Hydra Organization",
          "location": "Unknown"
        },
        {
          "id": 3,
          "title": "Director of Mischief",
          "startDate": "09-09-2009",
          "endDate": "09-09-2012",
          "company": "Loki Enterprises",
          "location": "Asgard"
        }
      ]);

    return (
        <section>
            <h2>Experience</h2>
            <ul>
                {experienceList.map((experience) => {
                    return (
                        <Experience 
                            key={experience.id}
                            {...experience}
                        />
                    )
                })}
            </ul>
        </section>
    )
}