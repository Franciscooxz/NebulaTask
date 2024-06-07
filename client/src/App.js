// /project-management-app/client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Board from './components/Kanban/Board';
import ProjectList from './components/Project/ProjectList';
import ProjectDetails from './components/Project/ProjectDetails';
import Task from './components/Task/Task';
import TeamManagement from './components/Team/TeamManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/kanban" component={Board} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/tasks/:id" component={Task} />
        <Route exact path="/team" component={TeamManagement} />
      </Switch>
    </Router>
  );
}

export default App;