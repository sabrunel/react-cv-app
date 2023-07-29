import PropTypes from 'prop-types';
import React from "react";

export const ResumePreview = React.forwardRef((props, ref) => {
    const { data } = props; 

    return (
        <div className="resume-preview" ref={ref}>
            <div className="preview-section">
                <div className="intro__title">
                    <h1>{data.introduction.name}</h1>
                    <h2 className="accent-text">{data.introduction.title}</h2>
                </div>
                <div className='intro__info'>
                    <ul>
                        <li>
                            <p>{data.personalInformation.address}</p>
                        </li>
                        <li>
                            <p>{data.personalInformation.phoneNumber}</p>
                        </li>
                        <li>
                            <p>{data.personalInformation.email}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="preview-section">
                <h2>About</h2>
                <p className="accent-text">{data.introduction.about}</p>
            </div>
            <hr />
            <div className="preview-section">
                <h2>Skills</h2>
                <ul>
                        {data.skills.map((skill) => {
                            return (
                                <li key={skill.id}>
                                    <p>{skill.label}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
            <div className="preview-section">
                <h2>Experiences</h2>
                <ul>
                    {
                        data.experience.sort((a,b) => {
                        return b.startDate > a.startDate ? 1 : -1;
                            }).map((experience) => {
                            return (
                                <li key={experience.id}>
                                    <h3> {experience.title} </h3>
                                    <p className="date-text"> {experience.startDate} - {experience.endDate} </p>
                                    <p> {experience.company} </p>
                                    <p> {experience.location} </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
            <div className="preview-section">
                 <h2>Education</h2>
                 <ul>
                    {
                        data.education.sort((a,b) => {
                        return b.startDate > a.startDate ? 1 : -1;
                            }).map((education) => {
                            return (
                                <li key={education.id}>
                                    <h3> {education.degree} </h3>
                                    <p className="date-text"> {education.startDate} - {education.endDate} </p>
                                    <p> {education.school} </p>
                                    <p> {education.location} </p>
                                </li>
                            )
                        })
                    }
                 </ul>
            </div>
        </div>
      );
})

ResumePreview.displayName = "Preview";
   
ResumePreview.propTypes = {
    data: PropTypes.object,
  };