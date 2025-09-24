import React, { useState } from 'react';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import './App.css'; 

function App() {
  const [dashboardData, setDashboardData] = useState(null);

  const handleDataGenerated = (data) => {
    setDashboardData(data);
  };

  return (
    <div className="main-container">
      {dashboardData ? (
        <Dashboard data={dashboardData} />
      ) : (
        <Form onDataGenerated={handleDataGenerated} />
      )}
    </div>
  );
}

export default App;