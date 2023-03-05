import React, { useState } from 'react'
import { FloatButton } from 'antd'
import ProjectList from './components/ProjectList'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'
import { ReactComponent as PlusIconSvg } from './assets/PlusSign.svg'

const App = () => {
  const [newProject, setNewProject] = useState(false)

  const handleCreateProject = () => {
    setNewProject(false)
  }

  return (
    <div>
      <Header />
      <FloatButton
        type='primary'
        onClick={() => setNewProject(newProject => !newProject)}
        style={{ top: 150, right: 125 }}
        icon={<PlusIconSvg />}
      />
      {newProject && <ProjectItem type='create' onSubmit={handleCreateProject} />}
      <ProjectList />
    </div>
  )
}

export default App
