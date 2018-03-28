import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  background-color: green;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
  border: solid black;
`

const Image = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: black;
`

export default class ListItem extends PureComponent {
  render() {
    const { label } = this.props
    return (
      <ListItemWrapper>
        <div>
          {label}
        </div>
        <Image />
      </ListItemWrapper>
    )
  }
}
