// /project-management-app/client/src/components/Team/TeamManagement.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamManagement = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get('/api/teams');
      setTeams(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderTeams = () => {
    return teams.map((team) => (
      <div key={team.id}>
        <h3>{team.name}</h3>
        <p>{team.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Team Management</h2>
      {renderTeams()}
    </div>
  );
};

export default TeamManagement;