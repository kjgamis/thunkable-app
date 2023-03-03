import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button } from 'antd'
import { deleteProject } from '../redux/project'

const ProjectItem = ({ id, name, dateCreated }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProject(name))
  }

  return (
    <Card>
      {name} {dateCreated}
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  )
}

export default ProjectItem
