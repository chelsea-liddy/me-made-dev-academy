import nock from 'nock'
import { getProjects, getProject, getUpdatesByProjectId } from './apiClient'

const fakeProjects = [
  {
    id: 1,
    image:
      'https://images4-g.ravelrycache.com/uploads/trulymyrtle/664603751/georgie2_medium2.jpg',
    dateStarted: '12/01/2022',
    category: 'Knitting',
    name: 'Georgie Sweater',
    designer: 'Truly Myrtle',
    description: 'Top-down sweater in the round with lace detail',
    materials: 'Sport weight yarn',
    link: 'https://trulymyrtle.co.nz/shop/georgie',
  },
  {
    id: 2,
    image:
      'https://images4-f.ravelrycache.com/uploads/Knitatude87/668055722/3D086FD8-ECFE-4540-A96C-E396DAB59508_medium2.JPG',
    dateStarted: '02/09/2022',
    category: 'Sewing',
    name: 'Duality Scarf',
    designer: 'Knitatude',
    description: 'Scarf knitted flat and seamed',
    materials: 'DK yarn',
    link: 'https://www.ravelry.com/patterns/library/duality-scarf',
  },
]

const fakeUpdates = [
  {
    id: 1,
    projectId: 1,
    dateUpdated: 1662797686226,
    update: 'Ready for blocking',
  },
  { id: 2, projectId: 1, dateUpdated: 1662797686226, update: 'Finished' },
]

describe('getProjects', () => {
  it('gets all projects from local api', () => {
    const scope = nock('http://localhost')
      .get('/v1/projects')
      .reply(200, fakeProjects)

    return getProjects().then((result) => {
      expect(result).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getProject', () => {
  it('gets a project from local api from id', () => {
    const id = 1
    const scope = nock('http://localhost')
      .get(`/v1/projects/${id}`)
      .reply(200, fakeProjects[0])

    return getProject(id).then((result) => {
      expect(result.name).toContain('Georgie')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getUpdatesByProjectId', () => {
  it('gets updates on a project from local api from project id', () => {
    const projectId = 1
    const scope = nock('http://localhost')
      .get(`/v1/projects/updates/${projectId}`)
      .reply(200, fakeUpdates)

    return getUpdatesByProjectId(projectId).then((result) => {
      expect(result[0].update).toContain('blocking')
      expect(scope.isDone()).toBe(true)
    })
  })
})
