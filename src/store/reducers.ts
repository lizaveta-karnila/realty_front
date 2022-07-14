import { combineReducers } from 'redux'
import userReducer from './reducers/user.reducer'

export const rootReducer = combineReducers({
  userReducer
})

export type RootState = ReturnType<typeof rootReducer>
