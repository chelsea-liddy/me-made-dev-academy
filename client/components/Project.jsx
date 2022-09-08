import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../apiClient'

const Project = () => {
  const id = useParams().id
  const [project, setProject] = useState([])

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
    </div>
  )
}

export default Project
