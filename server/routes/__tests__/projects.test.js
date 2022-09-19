const request = require('supertest')
const server = require('../../server')
const {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  getProjectUpdates,
} = require('../../db/db')

jest.mock('../../db/db')

const fakeProjects = [
  { id: 1, name: 'Abigail Dress' },
  { id: 2, name: 'Florence Dress' },
]
const fakeUpdates = [
  {
    id: 1,
    project_id: 1,
    update: 'Ready for blocking',
  },
  {
    id: 2,
    project_id: 1,
    update: 'Row 62',
  },
  {
    id: 3,
    project_id: 1,
    update: 'Finished',
  },
]

describe('GET /v1/projects', () => {
  it('returns all projects in the projects database', () => {
    getProjects.mockReturnValue(Promise.resolve(fakeProjects))
    return request(server)
      .get('/v1/projects')
      .then((res) => {
        expect(res.body[0].name).toContain('Abigail')
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
    getProject.mockReturnValue(Promise.resolve(fakeProjects[1]))
    return request(server)
      .get('/v1/projects/2')
      .then((res) => {
        expect(res.body.id).toBe(2)
        expect(res.body.name).not.toContain('Abigail')
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
      .post('/v1/projects')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})

describe('DELETE /v1/projects/:id', () => {
  it('deletes a project then returns projects in database', () => {
    deleteProject.mockReturnValue(Promise.resolve(fakeProjects))
    return request(server)
      .delete('/v1/projects/3')
      .then((res) => {
        expect(res.body).toHaveLength(2)
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    deleteProject.mockImplementation(() =>
      Promise.reject(new Error('There was an error'))
    )
    return request(server)
      .delete('/v1/projects/3')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})

describe('GET /v1/projects/updates/:projectId', () => {
  it('returns all the updates associated with a project', () => {
    getProjectUpdates.mockReturnValue(Promise.resolve(fakeUpdates))
    return request(server)
      .get('/v1/projects/updates/1')
      .then((res) => {
        expect(res.body).toHaveLength(3)
      })
  })
  it('returns status 500 and an error message when there is a problem', () => {
    getProjectUpdates.mockImplementation(() =>
      Promise.reject(new Error('There was an error'))
    )
    return request(server)
      .get('/v1/projects/updates/1')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Whoops!')
      })
  })
})
