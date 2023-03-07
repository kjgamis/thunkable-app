import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button, Modal, Image, Typography, Col, Row } from 'antd'
import Icon from '@ant-design/icons'
const { Text } = Typography
const { confirm } = Modal
import { updateProject, deleteProject, createProject } from '../redux/project'
import ProjectForm from './ProjectForm'
import ProjectIcon from '../assets/defaultProjectIcon_2x.png'
import DeleteIconSvg  from '../assets/DeleteIcon.svg'
import EditIconSvg  from '../assets/EditIcon.svg'
import QuestionIconSvg  from '../assets/Question.svg'

const ProjectItem = ({ id, name, dateCreated, type, onSubmit }) => {
  const dispatch = useDispatch()
  const [editProject, setEditProject] = useState(false)

  const handleUpdateProject = ({ name }) => {
    dispatch(updateProject({ name, id }))
    setEditProject(false)
  }

  const handleDeleteProject = () => {
    dispatch(deleteProject(name))
  }

  const handleCreateProject = ({ name }) => {
    dispatch(createProject({ name }))
    onSubmit()
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
      <Row>
        <Col span={2}>
          <Image src={ProjectIcon} width={25} />
        </Col>
        {type === 'create' && (
          <Fragment>
            <Col span={4}>
              <ProjectForm onSubmit={handleCreateProject} />
            </Col>
          </Fragment>
        )}
        {type === 'edit' && (
          <Fragment>
            {editProject && (
              <Fragment>
                <Col span={4}>
                  <ProjectForm onSubmit={handleUpdateProject} />
                </Col>
                <Col span={4} />
              </Fragment>
            )}
            {!editProject && (
              <Fragment>
                <Col span={4}>
                  <Text strong>{name}</Text>
                </Col>
                <Col span={4}>
                  <Button
                    onClick={() => setEditProject(editProject => !editProject)}
                    ghost
                    size='small'
                    icon={<EditIconSvg />}
                  /></Col>
              </Fragment>
            )}
            <Col span={12}>
              <Text type='secondary'>{dateCreated}</Text>
            </Col>
            <Col span={2}>
              <Button
                onClick={() => showDeleteConfirm()}
                ghost
                size='small'
                icon={<DeleteIconSvg />}
              />
            </Col>
          </Fragment>
        )}
      </Row>
    </Card>
  )
}

export default ProjectItem
