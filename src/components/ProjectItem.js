import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button } from 'antd'
import { updateProject, deleteProject } from '../redux/project'
import ProjectForm from './ProjectForm'

const ProjectItem = ({ id, name, dateCreated }) => {
  const dispatch = useDispatch()
  const [editProject, setEditProject] = useState(false)

  const handleUpdateProject = ({ name }) => {
    dispatch(updateProject({ name, id }))
    setEditProject(false)
  }
  
  const handleDeleteProject = () => {
    dispatch(deleteProject(name))
  }

  return (
    <Card>
      {editProject ? (
        <div>
          <ProjectForm onSubmit={handleUpdateProject} />
        </div>
      ) : (
        <div>
          {name}
          <Button
            onClick={() => setEditProject(editProject => !editProject)}>
            Edit
          </Button>
        </div>
      )}
      {dateCreated}
      <Button onClick={handleDeleteProject}>Delete</Button>
    </Card>
  )
}

export default ProjectItem
