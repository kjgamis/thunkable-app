import React, { useState } from 'react'
import { Button } from 'antd'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

const App = () => {
  const [createProject, setCreateProject] = useState(false)

  return (
    <div>
      Thunkable App
      <Button
        onClick={() => setCreateProject(createProject => !createProject)}
      >
        Add
      </Button>
      {createProject && <ProjectForm type='create' setView={setCreateProject} />}
      <ProjectList />
    </div>
  )
}

export default App
