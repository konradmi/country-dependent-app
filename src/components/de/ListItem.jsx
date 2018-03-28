import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
  border: solid black;
`

const Image = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: yellow;
`

export default class ListItem extends PureComponent {
  render() {
    const { label } = this.props
    return (
      <ListItemWrapper>
        <Image />
        <div>
          {label}
        </div>
      </ListItemWrapper>
    )
  }
}
