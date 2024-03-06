import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import GeneralInformationSection from './components/GeneralInformationSection.jsx';
import EducationalExperienceSection from './components/EducationalExperienceSection.jsx';
import PracticalExperienceSection from './components/PracticalExperienceSection.jsx';
import TitleApp from './components/TitleApp.jsx';
import { CloneSectionButton } from './components/Buttons.jsx';

const App = () => {
  
  const [educationalSections, setEducationalSections] = useState([]);
  const [practicalSections, setPracticalSections] = useState([]);

  const addEducationalSection = () => {
    setEducationalSections(prevSections => [...prevSections, <EducationalExperienceSection key={prevSections.length} />]);
  };

  const addPracticalSection = () => {
    setPracticalSections(prevSections => [...prevSections, <PracticalExperienceSection key={prevSections.length} />]);
  };

  return (
    <React.StrictMode>
      <TitleApp />

      <GeneralInformationSection />

      <h2>Educational Experience</h2>
      <EducationalExperienceSection />
      {educationalSections.map(section => section)}
      <CloneSectionButton onClick={addEducationalSection} />

      <h2>Practical Experience</h2>
      <PracticalExperienceSection />
      {practicalSections.map(section => section)}
      <CloneSectionButton onClick={addPracticalSection} />

    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
