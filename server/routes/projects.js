const express = require('express')
const db = require('../db/db')
const router = express.Router()

const errorMessage = 'Whoops! Something unravelled. Please try again.'

//GET /v1/projects (all projects)
router.get('/', (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch(() => {
      res.status(500).send(errorMessage)
    })
})

//GET /v1/projects (project by id)
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProject(id)
    .then((project) => {
      res.json(project)
    })
    .catch(() => {
      res.status(500).send(errorMessage)
    })
})

//POST /v1/projects (add a project)

router.post('/', (req, res) => {
  const project = req.body
  db.addProject(project)
    .then((project) => {
      res.json(project)
    })
    .catch(() => {
      res.status(500).send(errorMessage)
    })
})

//GET /v1/projects (project updates by project id)
router.get('/updates/:projectId', (req, res) => {
  const projectId = req.params.projectId
  db.getProjectUpdates(projectId)
    .then((updates) => {
      res.json(updates)
    })
    .catch(() => {
      res.status(500).send(errorMessage)
    })
})

//PATCH /v1/projects

//DELETE /v1/projects (delete projects by id)
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteProject(id)
    .then((projects) => {
      res.json(projects)
    })
    .catch(() => {
      res.status(500).send(errorMessage)
    })
})

module.exports = router
