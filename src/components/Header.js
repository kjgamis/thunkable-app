import React from 'react'
import { Layout, Image, Typography } from 'antd'
const { Header:  AntHeader } = Layout
const { Title } = Typography
import ThunkableBeaver from '../assets/ThunkableBeaver.png'

const Header = () => {
  return (
    <AntHeader style={{ backgroundColor: '#F7F9FD', padding: '0 100px', height: '170px' }}>
      <Image src={ThunkableBeaver} width={50} style={{ margin: '10px 0 40px' }} />
        <Title level={5}>MY PROJECTS</Title>
    </AntHeader>
  )
}

export default Header
