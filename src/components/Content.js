import React, { useState } from 'react'
import { FloatButton, Layout } from 'antd'
const { Content: AntContent } = Layout
import ProjectList from './ProjectList'
import ProjectItem from './ProjectItem'
import { ReactComponent as PlusIconSvg } from '../assets/PlusSign.svg'

const Content = () => {
  const [newProject, setNewProject] = useState(false)

  const handleCreateProject = () => {
    setNewProject(false)
  }

  return (
    <AntContent style={{ backgroundColor: '#FFFFFF', padding: '75px 100px' }}>
      <FloatButton
        type='primary'
        onClick={() => setNewProject(newProject => !newProject)}
        style={{ top: 150, right: 125 }}
        icon={<PlusIconSvg />}
      />
      {newProject && <ProjectItem type='create' onSubmit={handleCreateProject} />}
      <ProjectList />
    </AntContent>
  )
}

export default Content
