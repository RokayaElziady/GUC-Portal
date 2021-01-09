import { combineReducers } from 'redux'
import {
  tokenReducer,
} from './SigninReducer'

export const root = combineReducers({
  token: tokenReducer,
})
