// Core
import { combineReducers } from 'redux'
// Reducers
// eslint-disable-next-line import/no-cycle
import { appReducer } from './app-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
})
