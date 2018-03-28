import { createAction } from 'redux-actions'
import SET_CURRENT_COUNTRY from '../types'

export const setCurrentCountryAction = createAction(SET_CURRENT_COUNTRY)

export const fetchCurrentCountry = () => dispatch =>
  Promise.resolve('DE').then(country => dispatch(setCurrentCountryAction(country)))
