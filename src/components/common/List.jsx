import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
  background-color: green;
  margin: 2rem;
`

export default class List extends PureComponent {
  render() {
    return (
      <ListWrapper>
        {this.props.children}
      </ListWrapper>
    )
  }
}
