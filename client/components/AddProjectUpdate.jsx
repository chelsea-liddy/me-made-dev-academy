import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addProjectUpdate } from '../apiClient'

const AddProjectUpdate = () => {
  const projectId = useParams().id
  const initialState = { update: '' }
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  function changeHandler(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function submitHandler(event) {
    event.preventDefault()
    addProjectUpdate(projectId, formData)
    setFormData(initialState)
    navigate(`/project/${projectId}`)
  }

  return (
    <form>
      <h1>Add an update:</h1>
      <p>
        <label htmlFor="update">Update: </label>
        <input
          name="update"
          onChange={changeHandler}
          value={formData.update}
        ></input>
      </p>
      <p>
        <button onClick={submitHandler}>Save update</button>
      </p>
    </form>
  )
}

export default AddProjectUpdate
