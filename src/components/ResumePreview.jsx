import PropTypes from 'prop-types';
import React from "react";

export const ResumePreview = React.forwardRef((props, ref) => {
    const { data } = props; 

    return (
        <div className="resume-preview" ref={ref}>
            <div className="preview-main">
                <div className="preview-intro">
                    <h1>{data.introduction.name}</h1>
                    <h2>{data.introduction.title}</h2>
                    <p>{data.introduction.about}</p>
                </div>
                <h2>Experiences</h2>
                {
                    data.experience.sort((a,b) => {
                    return b.startDate > a.startDate ? 1 : -1;
                        }).map((experience) => {
                        return (
                            <div key={experience.id}>
                                <h3> {experience.title} </h3>
                                <p > {experience.startDate} - {experience.endDate} </p>
                                <p> {experience.company} </p>
                                <p> {experience.location} </p>
                            </div>
                        )
                    })
                }
                 <h2>Education</h2>
                {
                    data.education.sort((a,b) => {
                    return b.startDate > a.startDate ? 1 : -1;
                        }).map((education) => {
                        return (
                            <div key={education.id}>
                                <h3> {education.degree} </h3>
                                <p> {education.startDate} - {education.endDate} </p>
                                <p> {education.school} </p>
                                <p> {education.location} </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="preview-aside">
                <h3>Personal information</h3>
                <ul>
                        <li>
                        <p>Email</p>
                        <p>{data.personalInformation.email}</p>
                        </li>
                        <li>
                        <p>Address</p>
                        <p>{data.personalInformation.address}</p>
                        </li>
                        <li>
                        <p>Phone number</p>
                        <p>{data.personalInformation.phoneNumber}</p>
                        </li>
                    </ul>
                <h3>Skills</h3>
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
        </div>
      );
})

ResumePreview.displayName = "Preview";
   
ResumePreview.propTypes = {
    data: PropTypes.object,
  };