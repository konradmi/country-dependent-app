import React, { PureComponent } from 'react'

export default class Menu extends PureComponent {
  render() {
    return (
      <div>
        <button>{'Login'}</button>
        <button>{'Logout'}</button>
        <button>{'Search'}</button>
      </div>
    )
  }
}
