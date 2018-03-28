import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Lazy extends PureComponent {
  componentDidMount = () => {
    this.props.load.then((c) => {
      this.Component = c
      this.forceUpdate()
    })
  }

  render() {
    return this.Component ? <this.Component.default /> : null
  }
}

Lazy.propTypes = {
  load: PropTypes.instanceOf(Promise).isRequired,
}
