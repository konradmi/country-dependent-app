import React from 'react'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 4rem;
  align-items: center;
`

const Sidebar = () => (
  <SidebarWrapper>
    <div>Sidebar item 1</div>
    <div>Sidebar item 2</div>
    <div>Sidebar item 3</div>
  </SidebarWrapper>
)

export default Sidebar
