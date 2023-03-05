import projectReducer, {
  createProject,
  updateProject,
  deleteProject
} from '../project'

jest.mock('uuid', () => ({ v4: () => 'hjhj87878' }))

describe('project reducer', () => {
  const initialState = {
    projectList: [
      { id: 2, name: 'second', dateCreated: 'Friday, March 3, 2023' },
      { id: 3, name: 'third', dateCreated: 'Friday, March 3, 2023' }
    ]
  }
  it('should handle initial state', () => {
    expect(projectReducer(undefined, { type: 'unknown' })).toEqual({
      projectList: []
    })
  })

  it('should handle createProject', () => {
    const mockDate = new Date(1466424490000)
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)

    const date = new Date().toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })

    const actual = projectReducer(initialState, createProject({ name: 'Currency App' }))
    expect(actual.projectList).toEqual([
      { id: 2, name: 'second', dateCreated: 'Friday, March 3, 2023' },
      { id: 3, name: 'third', dateCreated: 'Friday, March 3, 2023' },
      { id: 'hjhj87878', name: 'Currency App', dateCreated: date }
    ])
  })

  it('should handle updateProject', () => {
    const actual = projectReducer(initialState, updateProject({
      name: 'updated project name',
      id: 3
    }))
    expect(actual.projectList).toEqual([
      { id: 2, name: 'second', dateCreated: 'Friday, March 3, 2023' },
      { id: 3, name: 'updated project name', dateCreated: 'Friday, March 3, 2023' }
    ])
  })

  it('should handle deleteProject', () => {
    const actual = projectReducer(initialState, deleteProject('second'))
    expect(actual.projectList).toEqual([
      { name: 'third', id: 3, dateCreated: 'Friday, March 3, 2023' }
    ])
  })
})
