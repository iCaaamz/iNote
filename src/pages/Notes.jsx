import React from 'react'
import {CiSearch} from "react-icons/ci"
const Notes = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>iNotes</h2>
            <input type="text" autoFocus placeholder='Keyword...' />
            <button><CiSearch/></button>
        </header>
    </section>
  )
}

export default Notes