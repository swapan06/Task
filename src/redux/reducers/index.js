import userStatus from './auth'
import { combineReducers } from 'redux'
import datainput from './data'

const rootReducers = combineReducers(
    {
        userStatus,
        datainput
    }
)
export default rootReducers
