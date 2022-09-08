import request from 'superagent'

export function getProjects() {
  return request.get('/v1/projects').then((res) => res.body)
}

export function getProject(id) {
  return request.get(`/v1/projects/${id}`).then((res) => res.body)
}
