import React, { PureComponent } from 'react'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default class Sidebar extends PureComponent {
  render() {
    return (
      <SidebarWrapper>
        <div>Sidebar item 1</div>
        <div>Sidebar item 2</div>
        <div>Sidebar item 3</div>
      </SidebarWrapper>
    )
  }
}
