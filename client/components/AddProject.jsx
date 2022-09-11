import React, { useState } from 'react'
import { addProject } from '../apiClient'

const AddProject = () => {
  const [formData, setFormData] = useState({ name: '' })

  function changeHandler(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function submitHandler(event) {
    event.preventDefault()
    addProject(formData)
    setFormData({ name: '' })
  }

  return (
    <form>
      <h1>Add a new project:</h1>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={changeHandler}
          value={formData.name}
        ></input>
      </p>

      <button onClick={submitHandler}>Save new project</button>
    </form>
  )
}
export default AddProject
