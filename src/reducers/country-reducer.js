import { handleActions } from 'redux-actions'

import SET_CURRENT_COUNTRY from '../types'

export default handleActions({
  [SET_CURRENT_COUNTRY]: (state, action) => action.payload,
}, null)
