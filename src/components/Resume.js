// Import npm
import React from 'react';

// == Component
const Resume = (props) => {
  const {
    year,
    position,
    graduation,
    university,
    company,
    details,
  } = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <ul>
          {details.map((detail, id) => (
            <li key={id}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// == Export default
export default Resume;
