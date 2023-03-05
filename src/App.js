import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FloatButton } from 'antd'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import { createProject } from './redux/project'
import { ReactComponent as PlusIconSvg } from './assets/PlusSign.svg'

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
      <FloatButton
        type='primary'
        onClick={() => setNewProject(newProject => !newProject)}
        style={{ top: 150, right: 125 }}
        icon={<PlusIconSvg />}
      />
      {newProject && <ProjectForm onSubmit={handleCreateProject} />}
      <ProjectList />
    </div>
  )
}

export default App
