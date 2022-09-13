import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewProject } from '../actions'

const AddProject = () => {
  const initialState = {
    name: '',
    category: '',
    date_started: '',
    designer: '',
    description: '',
    materials: '',
    link: '',
    image: '',
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialState)

  function changeHandler(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function submitHandler(event) {
    event.preventDefault()
    dispatch(addNewProject(formData))
    setFormData(initialState)
    navigate('/')
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
        <select
          name="category"
          onChange={changeHandler}
          value={formData.category}
        >
          <option value=""></option>
          <option value="Knitting">Knitting</option>
          <option value="Sewing">Sewing</option>
          <option value="Other">Other</option>
        </select>
      </p>
      <p>
        <label htmlFor="date_started">Date project started: </label>
        <input
          type="date"
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
