import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import GeneralInformationSection from './components/GeneralInformationSection.jsx'
import EducationalExperienceSection from './components/EducationalExperienceSection.jsx'
import PracticalExperienceSection from './components/PracticalExperienceSection.jsx'
import TitleApp from './components/TitleApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleApp />
    <GeneralInformationSection />
    <EducationalExperienceSection />
    <PracticalExperienceSection />
  </React.StrictMode>,
)
