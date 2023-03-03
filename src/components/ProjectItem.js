import React from 'react'
import { Card } from 'antd'

const ProjectItem = ({ name, dateCreated }) => {
  return (
    <Card>
      {name} {dateCreated}
    </Card>
  )
}

export default ProjectItem
