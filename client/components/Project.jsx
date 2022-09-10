import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../apiClient'
import ProjectUpdates from './ProjectUpdates'

const Project = () => {
  const id = useParams().id
  const [project, setProject] = useState({})

  useEffect(() => {
    getProject(id)
      .then((newProject) => {
        setProject(newProject)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h1>{project.name}</h1>
      <div className="image-container">
        <img
          className="project-image"
          src={project.image}
          alt={project.name}
        ></img>
      </div>
      <p>Designer: {project.designer}</p>
      <p>Description: {project.description}</p>
      <p>Materials: {project.materials}</p>
      <p>
        <a href={project.link}>Link</a>
      </p>
      <ProjectUpdates />
    </div>
  )
}

export default Project
