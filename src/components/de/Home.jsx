import React from 'react'

import Menu from '../common/Menu'
import Sidebar from './Sidebar'
import List from '../common/List'
import Layout from './Layout'
import ListItem from './ListItem'

const Home = () => {
  const renderMenu = () => <Menu />
  const renderSidebar = () => <Sidebar />
  const renderList = () => (
    <List>
      {
        ['label1', 'label2', 'label3'].map((item, key) => <ListItem label={item} key={key} />)
      }
    </List>
  )
  return (
    <Layout
      menu={renderMenu}
      sidebar={renderSidebar}
      list={renderList}
    />
  )
}

export default Home
