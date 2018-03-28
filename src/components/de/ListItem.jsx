import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const ListItem = ({ label }) => (
  <ListItemWrapper>
    <Image />
    <div>
      {label}
    </div>
  </ListItemWrapper>
)

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
}

export default ListItem
