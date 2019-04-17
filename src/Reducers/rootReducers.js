import PostReducers from './postReducers';
import { combineReducers } from 'redux';

const RootReducers = combineReducers({
    posts:PostReducers
})

export default RootReducers;