// /project-management-app/client/src/components/Kanban/Board.js

import React from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="board">
      {tasks.map(task => (
        <div key={task.id} className="card">
          <div className="card-header">{task.title}</div>
          <div className="card-body">{task.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Board;