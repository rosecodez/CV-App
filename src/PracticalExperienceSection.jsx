import './App.css'
import { EditButton } from './Buttons'
import { SubmitButton } from './Buttons'

export default function PracticalExperienceSection() {

  return (
    <section id = "practical-exp">
      <div>
        <h2>Practical Experience</h2>
        <div>Company name: </div>
        <div>Position title: </div>
        <div>Main responsibilities: </div>
        <div>Date: </div>
      </div>

        <div className='buttons-container'>
          < EditButton />
          < SubmitButton />
        </div>
    </section>
  )
}
