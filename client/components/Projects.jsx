import React, { useState, useEffect } from 'react'
import { getProjects } from '../apiClient'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then((projectList) => {
        setProjects(projectList)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name}></img>
              <p>Category: {project.category}</p>
              <p>Designer: {project.designer}</p>
              <p>Description: {project.description}</p>
              <p>Materials: {project.materials}</p>
              <p>
                <a href={project.link}>Link</a>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
