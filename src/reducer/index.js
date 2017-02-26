import {combineReducers} from 'redux';

const defaultState = (state = {}) => 'Welcome to learning of redux';

const rootReducer = combineReducers({
    message: defaultState
})

export default rootReducer;