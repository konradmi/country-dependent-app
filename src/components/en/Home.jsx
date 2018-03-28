import React, { PureComponent } from 'react'

import Menu from '../common/Menu'
import Sidebar from '../common/Sidebar'
import List from '../common/List'
import Layout from './Layout'
import ListItem from '../common/ListItem'

export default class Home extends PureComponent {
  renderMenu = () => <Menu />
  renderSidebar = () => <Sidebar />
  renderList = () => (
    <List>
      {
        ['label1', 'label2', 'label3', 'label4'].map((item, key) => <ListItem label={item} key={key} />)
      }
    </List>
  )
  render() {
    return (
      <Layout
        menu={this.renderMenu}
        sidebar={this.renderSidebar}
        list={this.renderList}
      />
    )
  }
}
