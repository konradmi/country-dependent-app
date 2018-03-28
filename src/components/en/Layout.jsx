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

const Layout = ({ menu, sidebar, list }) => (
  <div>
    <Menu>
      Menu
      {menu()}
    </Menu>
    <MainSectionWrapper>
      <Sidebar>
        {sidebar()}
      </Sidebar>
      <List>
        {list()}
      </List>
    </MainSectionWrapper>
  </div>
)

Layout.propTypes = {
  menu: PropTypes.func.isRequired,
  sidebar: PropTypes.func.isRequired,
  list: PropTypes.func.isRequired,
}

export default Layout
