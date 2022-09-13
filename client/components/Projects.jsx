import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProjects } from '../actions'
import ProjectSummary from './ProjectSummary'

const Projects = () => {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const handleClick = () => {
    navigate('/project/add')
  }

  return (
    <div>
      <button onClick={handleClick} className="add-button">
        Add a new project
      </button>

      <h1 className="page-header">Projects</h1>

      <div className="flex-grid">
        {projects.map((project) => {
          return (
            <div className="col" key={project.id}>
              <ProjectSummary
                name={project.name}
                id={project.id}
                image={project.image}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
