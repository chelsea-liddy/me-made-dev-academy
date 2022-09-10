const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

const db = require('./db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getProjects', () => {
  it('returns all the projects in the database', () => {
    return db.getProjects(testDb).then((projects) => {
      expect(projects[0].name).toContain('Georgie')
    })
  })
})

describe('getProject', () => {
  it('returns a project based on id', () => {
    return db.getProject(2, testDb).then((project) => {
      expect(project.name).toContain('Duality')
    })
  })
})

describe('addProject', () => {
  it('adds a new project into databse', () => {
    const project = {
      name: 'test project',
      image: 'https://image.com',
      date_started: '12/4/2022',
      category: 'Knitting',
      designer: 'whoever',
      description: 'blah blah',
      materials: 'blah blah',
      link: 'https://test.com',
    }
    return db.addProject(project, testDb).then(() => {
      return testDb('projects')
        .select()
        .then((res) => {
          expect(res).toHaveLength(3)
        })
    })
  })
})
