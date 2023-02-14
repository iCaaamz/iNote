import React from 'react'
import {CiSearch} from "react-icons/ci"
import dummyNotes from '../dummy__notes'
const Notes = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>iNotes</h2>
            <input type="text" autoFocus placeholder='Keyword...' />
            <button className='btn'><CiSearch/></button>
        </header>
        <div className="notes__container">

        </div>
    </section>
  )
}

export default Notes