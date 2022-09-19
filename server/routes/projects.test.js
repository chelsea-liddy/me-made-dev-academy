const request = require('supertest')
const server = require('../server')
const { getProjects, getProject } = require('../db/db')

jest.mock('../db/db')

describe('GET /v1/projects', () => {
  it('returns all projects in the projects database', () => {
    const fakeProjects = [
      { name: 'Chelsea sweater' },
      {
        name: 'Simon sweater',
      },
    ]
    getProjects.mockReturnValue(Promise.resolve(fakeProjects))
    return request(server)
      .get('/v1/projects')
      .then((res) => {
        expect(res.body[0].name).toContain('Chelsea')
        expect(res.body).toHaveLength(2)
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    getProjects.mockImplementation(() =>
      Promise.reject(new Error('There was an error'))
    )
    return request(server)
      .get('/v1/projects')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})

describe('GET /v1/projects/:id', () => {
  it('gets a specific project based on its id', () => {
    const fakeProjects = [
      { id: 1, name: 'Chelsea sweater' },
      {
        id: 2,
        name: 'Simon sweater',
      },
    ]
    getProject.mockReturnValue(Promise.resolve(fakeProjects[1]))
    return request(server)
      .get('/v1/projects/:id')
      .then((res) => {
        expect(res.body.id).toBe(2)
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    getProject.mockImplementation(() =>
      Promise.reject(new Error('There was an error'))
    )
    return request(server)
      .get('/v1/projects/:id')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})
