import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectList: [
      // { name: '', dateCreated: '' }
      // { name: '', dateCreated: '' }
      // { name: '', dateCreated: '' }
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
        dateCreated: new Date()
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { createProject } = projectSlice.actions

export default projectSlice.reducer