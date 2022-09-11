import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProject } from '../apiClient'

const AddProject = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    date_started: '',
    designer: '',
    description: '',
    materials: '',
    link: '',
    image: '',
  })

  function changeHandler(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function submitHandler(event) {
    event.preventDefault()
    addProject(formData)
    setFormData({
      name: '',
      category: '',
      date_started: '',
      designer: '',
      description: '',
      materials: '',
      link: '',
      image: '',
    })
    navigate('/projects')
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
      <p>
        <label htmlFor="category">Category: </label>
        <input
          name="category"
          onChange={changeHandler}
          value={formData.category}
        ></input>
      </p>
      <p>
        <label htmlFor="date_started">Date project started: </label>
        <input
          name="date_started"
          onChange={changeHandler}
          value={formData.date_started}
        ></input>
      </p>
      <p>
        <label htmlFor="designer">Designer: </label>
        <input
          name="designer"
          onChange={changeHandler}
          value={formData.designer}
        ></input>
      </p>
      <p>
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          onChange={changeHandler}
          value={formData.description}
        ></input>
      </p>
      <p>
        <label htmlFor="materials">Materials: </label>
        <input
          name="materials"
          onChange={changeHandler}
          value={formData.materials}
        ></input>
      </p>
      <p>
        <label htmlFor="link">Link: </label>
        <input
          name="link"
          onChange={changeHandler}
          value={formData.link}
        ></input>
      </p>
      <p>
        <label htmlFor="image">Image link: </label>
        <input
          name="image"
          onChange={changeHandler}
          value={formData.image}
        ></input>
      </p>
      <p>
        <button onClick={submitHandler}>Save new project</button>
      </p>
    </form>
  )
}
export default AddProject
