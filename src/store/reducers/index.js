import { combineReducers } from 'redux'
import userinfo from './userinfo'
const todoApp = combineReducers({
    userinfo,
});

export default todoApp