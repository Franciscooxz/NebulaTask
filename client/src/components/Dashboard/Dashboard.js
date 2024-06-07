import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // Paso 2: Crear un estado para los datos del dashboard
  const [dashboardData, setDashboardData] = useState({ stats: [] });

  // Paso 3: Cargar datos del dashboard
  useEffect(() => {
    // Simular la carga de datos con un timeout
    setTimeout(() => {
      // Simular datos del dashboard
      const fetchedData = {
        stats: [
          { name: 'Proyectos Activos', value: 5 },
          { name: 'Tareas Pendientes', value: 12 },
          { name: 'Miembros del Equipo', value: 4 },
        ],
      };
      setDashboardData(fetchedData);
    }, 1000);
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  // Paso 4: Mostrar los datos del dashboard
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {dashboardData.stats.map((stat, index) => (
          <div key={index}>
            <h2>{stat.name}</h2>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;