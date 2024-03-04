import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInformationSection from './GeneralInformationSection.jsx'
import './index.css'
import EducationalExperienceSection from './EducationalExperienceSection.jsx'
import PracticalExperienceSection from './PracticalExperienceSection.jsx'
import TitleApp from './TitleApp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleApp />
    <GeneralInformationSection />
    <EducationalExperienceSection />
    <PracticalExperienceSection />
  </React.StrictMode>,
)
