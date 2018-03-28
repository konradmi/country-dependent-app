import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  background-color: grey;
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
`

const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.div`
  background-color: red;
  width: 30%;
`

const List = styled.div`
  background-color:  blue;
  width: 70%;
`

export default class Layout extends PureComponent {
  render() {
    return (
      <div>
        <Menu>
          Menu
          {this.props.menu()}
        </Menu>
        <MainSectionWrapper>
          <List>
            {this.props.list()}
          </List>
          <Sidebar>
            {this.props.sidebar()}
          </Sidebar>
        </MainSectionWrapper>
      </div>
    )
  }
}
