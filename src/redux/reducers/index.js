import userStatus from './auth'
import { combineReducers } from 'redux'
import datainput from './data'
import type from '../type';


const rootReducers = combineReducers(
    {
        userStatus,
        datainput
    }
);
const appReducer = (state, action) => {
    if (action.type == type.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return rootReducers(state, action)
}
export default appReducer;
