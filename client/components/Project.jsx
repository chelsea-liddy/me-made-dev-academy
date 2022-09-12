import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../apiClient'
import ProjectUpdates from './ProjectUpdates'

const Project = () => {
  const id = useParams().id
  const [project, setProject] = useState({})

  useEffect(() => {
    getProject(id)
      .then((project) => {
        setProject(project)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="project-container">
      <div className="project-details">
        <h1>{project.name}</h1>
        <h3>Designer:</h3> {project.designer}
        <h3>Description:</h3> {project.description}
        <h3>Materials:</h3> {project.materials}
        <h3>Instructions: </h3> <a href={project.link}>{project.link}</a>
        <h3>Date started: </h3> {project.dateStarted}
        <ProjectUpdates />
      </div>
      <div className="image-container">
        <img
          className="project-image"
          src={project.image}
          alt={project.name}
        ></img>
      </div>
    </div>
  )
}

export default Project
