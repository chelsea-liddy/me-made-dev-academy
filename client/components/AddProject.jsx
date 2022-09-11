import React, { useState } from 'react'
import { addProject } from '../apiClient'

const initialFormData = {
  name: '',
  image: '',
  dateStarted: '',
  category: '',
  designer: '',
  description: '',
  materials: '',
  link: '',
}

const AddProject = () => {
  const [formData, setFormData] = useState(initialFormData)

  function changeHandler(event) {
    const { name, value } = event.target
    const newFormData = {
      ...formData,
      [name]: value,
    }
    setFormData(newFormData)
  }

  function submitHandler(event) {
    event.preventDefault()
    addProject(formData)
    setFormData(initialFormData)
  }

  return (
    <div>
      <h2>Add a new project</h2>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={changeHandler}
          >
            <option value="sewing">Sewing</option>
            <option value="knitting">Knitting</option>
            <option value="embroidery">Embroidery</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="designer">Designer: </label>
          <input
            type="text"
            id="designer"
            name="designer"
            value={formData.designer}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="image">Image address: </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="materials">Materials required: </label>
          <input
            type="text"
            id="materials"
            name="materials"
            value={formData.materials}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="link">Link: </label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="dateStarted">Date project started: </label>
          <input
            type="text"
            id="dateStarted"
            name="dateStarted"
            value={formData.dateStarted}
            onChange={changeHandler}
          />
        </div>

        <input type="submit" onClick={submitHandler} />
      </form>
    </div>
  )
}
export default AddProject
