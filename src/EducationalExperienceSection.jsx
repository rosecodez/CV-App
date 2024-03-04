/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import { EditButton } from './Buttons'
import { SubmitButton } from './Buttons'

export default function EducationalExperienceSection(props) {
  const [school, setSchool] = useState(props.school);
  const [title, setTitle] = useState(props.title);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  // edit mode 
  const [isEditing, setIsEditing] = useState(false);

  // render edit input
  function renderInput(value, handler) {
    return (
      <input type="text" value={value} onChange={handler} />
    );
  }

  const handleStartDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };
  
  const handleEndDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setEndDate(selectedDate);
  };

  // submit button click
  const handleSubmit = () => {
    setIsEditing(false);
  };

  const isDateRangeAvailable = startDate && endDate;

  return (
    <section id="general-exp">
      <div>
        <h2>Educational Experience</h2>
        <div>School Name: {isEditing ? renderInput(school, (e) => setSchool(e.target.value)) : <span>{school}</span>}</div>
        <div>Title of study: {isEditing ? renderInput(title, (e) => setTitle(e.target.value)) : <span>{title}</span>}</div>
  
        <div>
          {isDateRangeAvailable && (
            <div>
              Start Date: {isEditing ? <input type="date" value={startDate.toISOString().split('T')[0]} onChange={handleStartDateChange} /> : <span>{startDate.toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })}</span>}
              <br />
              End Date: {isEditing ? <input type="date" value={endDate.toISOString().split('T')[0]} onChange={handleEndDateChange} /> : <span>{endDate.toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })}</span>}
            </div>
          )}
          {!isDateRangeAvailable && (
            <div>
              Start Date: {isEditing ? <input type="date" onChange={handleStartDateChange} /> : null}
              <br />
              End Date: {isEditing ? <input type="date" onChange={handleEndDateChange} /> : null}
            </div>
          )}
        </div>
      </div>
  
      <div className='buttons-container'>
        {isEditing ? (
          <SubmitButton onClick={handleSubmit} />
        ) : (
          <EditButton onClick={() => setIsEditing(true)} />
        )}
      </div>
    </section>
  );
}
