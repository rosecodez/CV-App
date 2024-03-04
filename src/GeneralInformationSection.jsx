import { useState } from 'react';
import './App.css';
import { EditButton } from './Buttons';
import { SubmitButton } from './Buttons';

export default function GeneralInformationSection(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);

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

  // submit button click
  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    
    <section id="general-info">
      <div>
        <h2>General information</h2>
        <div>Name: {renderInput(name, (e) => setName(e.target.value))}</div>
        <div>Email: {renderInput(email, (e) => setEmail(e.target.value))}</div>
        <div>Phone number: {renderInput(phoneNumber, (e) => setPhoneNumber(e.target.value))}</div>
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
