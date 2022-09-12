import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = (props) => {
  const project = props

  return (
    <>
      <Link to={`/projects/${project.id}`}>
        {' '}
        <h2>{project.name}</h2>
      </Link>
      <div>
        <img src={project.image} alt={project.name}></img>
      </div>
    </>
  )
}

export default ProjectSummary
