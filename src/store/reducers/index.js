import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import userinfo from './userinfo'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    userinfo,
});

export default todoApp