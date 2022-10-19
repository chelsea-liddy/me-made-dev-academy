const express = require('express')
const db = require('../db/db')
const router = express.Router()
const upload = require('../multer')

const errorMessage = 'Whoops! Something unravelled. Please try again.'

//GET /v1/projects (all projects)
router.get('/', (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch((err) => {
      res.status(500).send(errorMessage)
      console.error(err.message)
    })
})

//GET /v1/projects (project by id)
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProject(id)
    .then((project) => {
      res.json(project)
    })
    .catch((err) => {
      res.status(500).send(errorMessage)
      console.error(err.message)
    })
})

//POST /v1/projects (add a project)

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return null
  } else {
    const {
      date_started,
      category,
      name,
      designer,
      description,
      materials,
      link,
    } = req.body
    const project = {
      image: '/images/uploadedimages/' + req.file.filename,
      date_started,
      category,
      name,
      designer,
      description,
      materials,
      link,
    }
    db.addProject(project)
      .then((projects) => {
        res.json(projects)
      })
      .catch((err) => {
        res.status(500).send(errorMessage)
        console.error(err.message)
      })
  }
})

//DELETE /v1/projects (delete projects by id)
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteProject(id)
    .then((projects) => {
      res.json(projects)
    })
    .catch((err) => {
      res.status(500).send(errorMessage)
      console.error(err.message)
    })
})

// TO DO PATCH /v1/projects (edit a project)

//POST /v1/projects (add an update to a project)
router.post('/updates/:projectId', (req, res) => {
  const projectId = req.params.projectId
  const update = req.body
  update.project_id = req.params.projectId
  const currentDate = new Date(Date.now())
  update.date_updated = currentDate.toDateString()
  db.addProjectUpdate(projectId, update)
    .then((ids) => {
      return db.getProjectUpdate(ids[0])
    })
    .then((newUpdate) => {
      res.json(newUpdate)
    })
    .catch((err) => {
      res.status(500).send(errorMessage)
      console.error(err.message)
    })
})

//GET /v1/projects (project updates by project id)
router.get('/updates/:projectId', (req, res) => {
  const projectId = req.params.projectId
  db.getProjectUpdates(projectId)
    .then((updates) => {
      res.json(updates)
    })
    .catch((err) => {
      res.status(500).send(errorMessage)
      console.error(err.message)
    })
})

module.exports = router
