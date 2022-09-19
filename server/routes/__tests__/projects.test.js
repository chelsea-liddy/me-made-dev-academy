const request = require('supertest')
const server = require('../../server')
const { getProjects, getProject, addProject } = require('../../db/db')

jest.mock('../../db/db')

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
      .get('/v1/projects/2')
      .then((res) => {
        expect(res.body.id).toBe(2)
        expect(res.body.name).not.toContain('Chelsea')
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    getProject.mockImplementation(() =>
      Promise.reject(new Error('There was an error'))
    )
    return request(server)
      .get('/v1/projects/2')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})

describe('POST /v1/projects', () => {
  it('adds a project into the projects database and returns projects in database', () => {
    const fakeProjects = [
      { id: 3, name: 'Abigail Dress' },
      { id: 4, name: 'Florence Dress' },
    ]
    addProject.mockReturnValue(Promise.resolve(fakeProjects))
    return request(server)
      .post('/v1/projects')
      .then((res) => {
        expect(res.body[1].name).toBe('Florence Dress')
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    addProject.mockImplementation(() =>
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
