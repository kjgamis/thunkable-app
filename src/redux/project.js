import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectList: [
      { id: 1, name: 'first', dateCreated: 'Friday, March 3, 2023' },
      { id: 2, name: 'second', dateCreated: 'Friday, March 3, 2023' },
      { id: 3, name: 'third', dateCreated: 'Friday, March 3, 2023' }
    ]
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    createProject: (state, action) => {
      state.projectList.push({
        name: action.payload.project,
        dateCreated: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      })
    },
    deleteProject: (state, action) => {
      const newProjectList = state.projectList.filter(project => project.name !== action.payload)
      state.projectList = newProjectList
    }
  }
})

// Action creators are generated for each case reducer function
export const { createProject, updateProject, deleteProject } = projectSlice.actions

export default projectSlice.reducer