import './App.css'
import { EditButton } from './Buttons'
import { SubmitButton } from './Buttons'

export default function EducationalExperienceSection() {

  return (
    <section id = "general-exp">
      <div>
        <h2>Educational Experience: </h2>
        <div>School Name: </div>
        <div>Title of study: </div>
        <div>Date of study: </div>
      </div>

        <div className='buttons-container'>
          < EditButton />
          < SubmitButton />
        </div>
        
    </section>
  )
}
