import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProjects } from '../apiClient'
import AddProject from './AddProject'

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
      <div className="flex-grid">
        {projects.map((project) => {
          return (
            <div className="col" key={project.id}>
              <Link to={`/projects/${project.id}`}>
                {' '}
                <h2>{project.name}</h2>
              </Link>
              <div className="image-container">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.name}
                ></img>
              </div>
            </div>
          )
        })}
      </div>
      <AddProject />
    </div>
  )
}

export default Projects
