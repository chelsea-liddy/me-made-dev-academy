const config = require('./knexfile').development

const connection = require('knex')(config)

const projectsColumns = [
  'id',
  'image',
  'date_started as dateStarted',
  'category',
  'name',
  'designer',
  'description',
  'materials',
  'link',
]

const projectUpdatesColumns = [
  'id',
  'project_id as projectId',
  'date_updated as dateUpdated',
  'update',
]

function getProjects(db = connection) {
  return db('projects').select(...projectsColumns)
}

function getProject(id, db = connection) {
  return db('projects')
    .select(...projectsColumns)
    .where('id', id)
    .first()
}

function addProject(project, db = connection) {
  return db('projects').insert(project)
}

function editProject(project, id, db = connection) {
  return db('projects')
    .update({
      name: project.name,
      image: project.image,
      date_started: project.date_started,
      category: project.category,
      designer: project.designer,
      description: project.description,
      materials: project.materials,
      link: project.link,
    })
    .where('id', id)
}

function deleteProject(id, db = connection) {
  return db('projects').delete().where('id', id)
}

function getProjectUpdates(projectId, db = connection) {
  return db('project_updates')
    .select(...projectUpdatesColumns)
    .where('project_id', projectId)
}

function getProjectUpdate(id, db = connection) {
  return db('project_updates')
    .select(...projectUpdatesColumns)
    .where('id', id)
}

function addProjectUpdate(projectId, update, db = connection) {
  return db('project_updates').insert(update).where('project_id', projectId)
}

function deleteProjectUpdate(id, db = connection) {
  return db('project_updates').delete().where('id', id)
}

module.exports = {
  getProjects,
  getProject,
  addProject,
  editProject,
  deleteProject,
  getProjectUpdates,
  getProjectUpdate,
  addProjectUpdate,
  deleteProjectUpdate,
}
