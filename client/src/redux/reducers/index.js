// Este archivo es el punto de entrada para combinar todos los reducers de Redux

import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';
import teamReducer from './teamReducer';

const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
  users: userReducer,
  teams: teamReducer
});

export default rootReducer;