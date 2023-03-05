import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button, Modal } from 'antd'
import Icon from '@ant-design/icons'
const { confirm } = Modal
import { updateProject, deleteProject } from '../redux/project'
import ProjectForm from './ProjectForm'
import { ReactComponent as DeleteIconSvg } from '../assets/DeleteIcon.svg'
import { ReactComponent as EditIconSvg } from '../assets/EditIcon.svg'
import { ReactComponent as QuestionIconSvg } from '../assets/Question.svg'

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

  const showDeleteConfirm = () => {
    confirm({
      icon: <Icon component={QuestionIconSvg} />,
      title: 'Are you sure you want to delete this project?',
      content: 'This action cannot be undone',
      width: 500,
      okText: 'Yes',
      cancelText: 'No',
      onOk() { handleDeleteProject() }
    })
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
            onClick={() => setEditProject(editProject => !editProject)}
            ghost
            size='small'
            icon={<EditIconSvg />}
          />
        </div>
      )}
      {dateCreated}
      <Button
        onClick={() => showDeleteConfirm()}
        ghost
        size='small'
        icon={<DeleteIconSvg />}
      />
    </Card>
  )
}

export default ProjectItem
