import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const SidebarStyle = styled.div`
width: 16.3rem;
height: 100vh;
background-color: var(--sidebar-dark-color);
position: absolute;
`

function Sidebar() {
  return (
    <SidebarStyle>
      <Navigation />
    </SidebarStyle>
  )
}

export default Sidebar
