import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from 'antd'
import { createProject, updateProject } from '../redux/project'

const ProjectForm = ({ type, setView, id }) => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  // handleCreateProject is called on 'Enter' keypress
  const handleCreateProject = (values) => {
    dispatch(createProject(values.project))
    setView(false)
  }

  const handleUpdateProject = (values) => {
    dispatch(updateProject({ name: values.project, id: id }))
    setView(false)
  }

  return (
    <Form
      form={form}
      name='create project'
      onFinish={type === 'create' ? handleCreateProject : handleUpdateProject}
      style={{
        maxWidth: 250,
      }}
    >
      <Form.Item
        name='project'
      >
        <Input placeholder="Name your project" />
      </Form.Item>
    </Form>
  )
}

export default ProjectForm
