import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUpdatesByProjectId } from '../apiClient'

const ProjectUpdates = () => {
  const projectId = useParams().id
  const [projectUpdates, setProjectUpdates] = useState([])

  useEffect(() => {
    getUpdatesByProjectId(projectId)
      .then((updates) => {
        setProjectUpdates(updates)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      {projectUpdates.map((projectUpdate) => {
        return <p key={projectUpdate.id}>Update: {projectUpdate.update} </p>
      })}
    </div>
  )
}

export default ProjectUpdates
