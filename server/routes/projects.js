const express = require('express')
const db = require('../db/db')
const router = express.Router()

//GET /v1/projects
router.get('/', (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch((err) => {
      console.error(err.mesage)
      res.status(500).send("That's a server error!")
    })
})

//POST /v1/projects

//PATCH /v1/projects

//DELETE /v1/projects

module.exports = router
