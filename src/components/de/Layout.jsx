import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const Layout = ({ menu, sidebar, list }) => (
  <div>
    <Menu>
      {menu()}
    </Menu>
    <Sidebar>
      {sidebar()}
    </Sidebar>
    <List>
      {list()}
    </List>
  </div>
)

Layout.propTypes = {
  menu: PropTypes.func.isRequired,
  sidebar: PropTypes.func.isRequired,
  list: PropTypes.func.isRequired,
}

export default Layout
