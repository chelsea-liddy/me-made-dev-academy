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
  const [selectedImage, setSelectedImage] = useState(null)

  function changeHandler(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function imageHandler(event) {
    setSelectedImage(event.target.files[0])
  }

  function submitHandler(event) {
    event.preventDefault()
    const allFormData = new FormData()
    allFormData.append('image', selectedImage)
    allFormData.append('date_started', formData.date_started)
    allFormData.append('category', formData.category)
    allFormData.append('name', formData.name)
    allFormData.append('designer', formData.designer)
    allFormData.append('description', formData.description)
    allFormData.append('materials', formData.materials)
    allFormData.append('link', formData.link)
    dispatch(addNewProject(allFormData))
    setFormData(initialState)
    navigate('/')
  }

  return (
    <form encType="multipart/form-data">
      <h1>Add a new project:</h1>
      <div className="field">
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={changeHandler}
          value={formData.name}
        ></input>
      </div>
      <div className="field">
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
      </div>
      <div className="field">
        <label htmlFor="date_started">Date project started: </label>
        <input
          type="date"
          name="date_started"
          onChange={changeHandler}
          value={formData.date_started}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="designer">Designer: </label>
        <input
          name="designer"
          onChange={changeHandler}
          value={formData.designer}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          onChange={changeHandler}
          value={formData.description}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="materials">Materials: </label>
        <input
          name="materials"
          onChange={changeHandler}
          value={formData.materials}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="link">Link: </label>
        <input
          name="link"
          onChange={changeHandler}
          value={formData.link}
        ></input>
      </div>
      <div>
        {selectedImage && (
          <div>
            <img
              alt="your selection"
              width={'250px'}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button
              onClick={(e) => {
                e.preventDefault()
                setSelectedImage(null)
              }}
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <div className="field">
        <label htmlFor="image">Add an image: </label>
        <input name="image" type="file" onChange={imageHandler}></input>
      </div>
      <div>
        <button onClick={submitHandler}>Save new project</button>
      </div>
    </form>
  )
}
export default AddProject
