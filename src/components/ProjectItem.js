import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button } from 'antd'
import { deleteProject } from '../redux/project'
import ProjectForm from './ProjectForm'

const ProjectItem = ({ id, name, dateCreated }) => {
  const dispatch = useDispatch()
  const [editProject, setEditProject] = useState(false)

  const handleDelete = () => {
    dispatch(deleteProject(name))
  }

  return (
    <Card>
      {editProject ? (
        <div>
          <ProjectForm type='update' setView={setEditProject} id={id} />
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
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  )
}

export default ProjectItem
