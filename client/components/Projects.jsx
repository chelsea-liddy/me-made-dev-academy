import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <Link to={'/projects/add'}>
        <button className="add-button">Add a new project</button>
      </Link>
      <h1 className="page-header">Projects</h1>

      <div className="flex-grid">
        {projects.map((project) => {
          return (
            <div className="col" key={project.id}>
              <Link to={`/projects/${project.id}`}>
                {' '}
                <h2>{project.name}</h2>
              </Link>
              <div>
                <img src={project.image} alt={project.name}></img>
              </div>
            </div>
          )
        })}
      </div>
      <div></div>
    </div>
  )
}

export default Projects
