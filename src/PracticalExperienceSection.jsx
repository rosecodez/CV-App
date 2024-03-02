import './App.css'
import { EditButton } from './Buttons'
import { SubmitButton } from './Buttons'

export default function PracticalExperienceSection() {

  return (
    <section id = "practical-exp">
      <div>
        <h2>Company name: </h2>
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
