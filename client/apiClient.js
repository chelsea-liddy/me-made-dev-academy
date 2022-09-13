import request from 'superagent'

export function getProjects() {
  return request.get('/v1/projects').then((res) => res.body)
}

export function getProject(id) {
  return request.get(`/v1/projects/${id}`).then((res) => res.body)
}

export function getUpdatesByProjectId(projectId) {
  return request
    .get(`/v1/projects/updates/${projectId}`)
    .then((res) => res.body)
}

export function addProject(project) {
  return request
    .post('/v1/projects')
    .send(project)
    .then((res) => {
      return res.body
    })
}

export function deleteProject(id) {
  return request.del(`/v1/projects/${id}`).then((res) => res.body)
}
