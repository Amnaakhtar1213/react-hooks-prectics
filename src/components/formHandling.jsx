import React, {useState} from 'react'

const FormHandling = () => {

  const [title, setTitle] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
console.log("form submit by", title)
setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitForm(e)
      }}>
        <input className="m-5 p-5 " type="input"
         placeholder="Enter your name"
          value={title}
         onChange={(e) => {
          setTitle(e.target.value)
         }} />
        <button className="m-5 p-5 border-2 rounded">Submit</button>
      </form>
    </div>
  )
}

export default FormHandling
