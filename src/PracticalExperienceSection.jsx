/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import { EditButton } from './Buttons';
import { SubmitButton } from './Buttons';


export default function PracticalExperienceSection(props) {
  const [companyName, setcompanyName] = useState(props.companyName);
  const [positionTitle, setPositionTitle] = useState(props.positionTitle);
  const [responsibilities, setResponsibilities] = useState(props.responsibilities);
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);

  // edit mode 
  const [isEditing, setIsEditing] = useState(false);

  // render edit input
  function renderInput(value, handler) {
    if (isEditing) {
      return <input type="text" value={value} onChange={handler} />;
    } else {
      return <span>{value}</span>;
    }
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
    <section id = "practical-exp">
      <div>
        <h2>Practical Experience</h2>
        <div>Company name: {renderInput(companyName, (e) => setcompanyName(e.target.value))}</div>
        <div>Position title: {renderInput(positionTitle, (e) => setPositionTitle(e.target.value))}</div>
        <div>Main responsibilities: {renderInput(responsibilities, (e) => setResponsibilities(e.target.value))}</div>
        
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
  )
}
