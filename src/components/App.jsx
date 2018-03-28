import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as countryActions from '../actions/country-actions'
import homeConfig from '../configuration_country/homeConfig'

@connect(
  s => ({
    country: s.country,
  }),
  d => ({
    countryActions: bindActionCreators(countryActions, d),
  }),
)
export default class App extends PureComponent {
  static propTypes = {
    country: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.countryActions.fetchCurrentCountry()
  }

  render() {
    const { country } = this.props
    return (
      <div>
        {country && React.createElement(homeConfig[country])}
      </div>
    )
  }
}
