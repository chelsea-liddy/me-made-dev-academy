import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProjects, setProjectsSuccess } from '../actions'
import { getProjects } from '../apiClient'

const Projects = () => {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProjects())
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
