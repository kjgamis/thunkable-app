import React from 'react'
import { useSelector } from 'react-redux'
import ProjectItem from './ProjectItem'

const ProjectList = () => {
  const { projectList } = useSelector(state => state.project)
  return (
    <div>
      {projectList.length > 0 && projectList.map(({ id, name, dateCreated }) =>
        <ProjectItem id={id} name={name} dateCreated={dateCreated} />
      )}
    </div>
  )
}

export default ProjectList
