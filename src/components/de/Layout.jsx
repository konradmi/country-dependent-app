import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  background-color: grey;
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
`

const Sidebar = styled.div`
  background-color: red;
`

const List = styled.div`
  background-color:  blue;
`

export default class Layout extends PureComponent {
  render() {
    return (
      <div>
        <Menu>
          {this.props.menu()}
        </Menu>
        <Sidebar>
          {this.props.sidebar()}
        </Sidebar>
        <List>
          {this.props.list()}
        </List>
      </div>
    )
  }
}
