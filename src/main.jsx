import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralInformationSection from './GeneralInformationSection.jsx'
import './index.css'
import EducationalExperienceSection from './EducationalExperienceSection.jsx'
import PracticalExperienceSection from './PracticalExperienceSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInformationSection />
    <EducationalExperienceSection />
    <PracticalExperienceSection />
  </React.StrictMode>,
)
