const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  editProject,
  getProjectUpdates,
  getProjectUpdate,
  addProjectUpdate,
  deleteProjectUpdate,
} = require('../db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getProjects', () => {
  it('returns all the projects in the database', () => {
    return getProjects(testDb).then((projects) => {
      expect(projects[0].name).toContain('Georgie')
    })
  })
})

describe('getProject', () => {
  it('returns a project based on id', () => {
    return getProject(2, testDb).then((project) => {
      expect(project.name).toContain('Duality')
    })
  })
})

describe('addProject', () => {
  it('adds a new project into databse and returns all the projects', () => {
    const newProject = {
      name: 'test project',
      image: 'https://image.com',
      date_started: '12/4/2022',
      category: 'Knitting',
      designer: 'whoever',
      description: 'blah blah',
      materials: 'blah blah',
      link: 'https://test.com',
    }
    return addProject(newProject, testDb).then((projects) => {
      expect(projects).toHaveLength(3)
    })
  })
})

describe('deleteProject', () => {
  it('deletes a project from the database and returns all the projects', () => {
    return deleteProject(1, testDb).then((projects) => {
      expect(projects).toHaveLength(1)
      expect(projects[0].id).toBe(2)
    })
  })
})

describe('editProject', () => {
  it('edits a project in the database', () => {
    const editedProject = {
      image:
        'https://images4-g.ravelrycache.com/uploads/trulymyrtle/664603751/georgie2_medium2.jpg',
      date_started: '12/02/2022',
      category: 'Knitting',
      name: 'Georgie Sweater',
      designer: 'Truly Myrtle',
      description: 'Top-down sweater in the round with lace detail',
      materials: 'Worsted weight yarn',
      link: 'https://trulymyrtle.co.nz/shop/georgie',
    }
    return editProject(editedProject, 1, testDb)
      .then(() => testDb('projects').select())
      .then((projects) => {
        expect(projects[0].materials).toContain('Worsted')
        expect(projects[0].date_started).not.toBe('12/01/2022')
      })
  })
})

describe('getProjectUpdates', () => {
  it('gets all the updates associated with a project', () => {
    return getProjectUpdates(1, testDb).then((updates) => {
      expect(updates).toHaveLength(2)
      expect(updates[0].projectId).toBe(1)
      expect(updates[1].projectId).toBe(1)
    })
  })
})

describe('getProjectUpdate', () => {
  it('gets a particular update on a project', () => {
    return getProjectUpdate(2, testDb).then((update) => {
      expect(update.id).toBe(2)
    })
  })
})

describe('addProjectUpdate', () => {
  it('adds an update', () => {
    const newUpdate = {
      date_updated: new Date().toDateString(),
      project_id: 2,
      update: 'Row 38',
    }
    return addProjectUpdate(2, newUpdate, testDb)
      .then(() => testDb('project_updates').select())
      .then((updates) => {
        expect(updates).toHaveLength(4)
      })
  })
})

describe('deleteProjectUpdate', () => {
  it('deletes an update', () => {
    return deleteProjectUpdate(1, testDb)
      .then(() => testDb('project_updates').select())
      .then((updates) => {
        expect(updates).toHaveLength(2)
      })
  })
})
