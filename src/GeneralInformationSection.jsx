import './App.css'
import { EditButton } from './Buttons'
import { SubmitButton } from './Buttons'

export default function GeneralInformationSection() {

  return (
    <section id = "general-info">
      <div>
        <h2>General information: </h2>
        <div>Name: </div>
        <div>Email: </div>
        <div>Phone number: </div>
      </div>

        <div className='buttons-container'>
          < EditButton />
          < SubmitButton />
        </div>
    </section>
  )
}
