import { getProjects } from '../apiClient'

export const SET_PROJECTS_SUCCESS = 'SET_PROJECTS_SUCCESS'

export function fetchProjects() {
  return getProjects().then((projects) => {
    dispatchEvent(setProjectsSuccess(projects))
    return null
  })
}

export function setProjectsSuccess(projects) {
  return {
    type: SET_PROJECTS_SUCCESS,
    payload: projects,
  }
}
