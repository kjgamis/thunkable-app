import React from 'react'
import { Form, Input } from 'antd'

const ProjectForm = ({ onSubmit }) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    onSubmit({ name: values.project })
  }

  return (
    <Form
      form={form}
      name='create project'
      onFinish={onFinish}
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
