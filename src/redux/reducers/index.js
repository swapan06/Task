import userStatus from './auth'
import { combineReducers } from 'redux'
import datainput from './data'

const rootReducers = combineReducers(
    {
        userStatus,
        datainput
    }
);
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return rootReducers(state, action)
}
export default rootReducers
