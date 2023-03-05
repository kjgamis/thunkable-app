import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button  } from 'antd'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import { createProject } from './redux/project'

const App = () => {
  const dispatch = useDispatch()
  const [newProject, setNewProject] = useState(false)

  const handleCreateProject = ({ name }) => {
    dispatch(createProject({ name }))
    setNewProject(false)
  }

  return (
    <div>
      <Header />
      <Button
        onClick={() => setNewProject(newProject => !newProject)}
      >
        Add
      </Button>
      {newProject && <ProjectForm onSubmit={handleCreateProject} />}
      <ProjectList />
    </div>
  )
}

export default App
