import { getProjects, addProject, deleteProject } from '../apiClient'

export const SET_PROJECTS_SUCCESS = 'SET_PROJECTS_SUCCESS'
export const SET_PROJECTS_PENDING = 'SET_PROJECTS_PENDING'
export const SET_ERROR = 'SET_ERROR'

export function fetchProjects() {
  return (dispatch) => {
    dispatch(setProjectsPending())
    return getProjects()
      .then((projects) => {
        dispatch(setProjectsSuccess(projects))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function addNewProject(newProject) {
  return (dispatch) => {
    return addProject(newProject)
      .then((projects) => {
        dispatch(setProjectsSuccess(projects))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function removeProject(id) {
  return (dispatch) => {
    return deleteProject(id)
      .then((projects) => {
        dispatch(setProjectsSuccess(projects))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function setProjectsSuccess(projects) {
  return {
    type: SET_PROJECTS_SUCCESS,
    payload: projects,
  }
}

export function setProjectsPending() {
  return {
    type: SET_PROJECTS_PENDING,
  }
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  }
}
