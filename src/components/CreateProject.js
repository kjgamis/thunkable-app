import React from 'react'
import {  useDispatch } from 'react-redux'
import { Card, Form, Input } from 'antd'
import { createProject } from '../redux/project'

const CreateProject = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  // onFinish is called on 'Enter' keypress
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(createProject(values))
  }

  return (
    <Card>
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
    </Card>
  )
}

export default CreateProject
