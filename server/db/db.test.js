const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

const db = require('./db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getProjects', () => {
  it('returns all the projects in the database', () => {
    return db.getProjects(testDb).then((projects) => {
      expect(projects).toHaveLength(2)
    })
  })
})
