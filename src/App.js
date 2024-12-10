import React, { useState, useEffect } from 'react';

function App() {
  const [tournaments, setTournaments] = useState([]);

  // Function to fetch tournaments from the back-end
  const fetchTournaments = async () => {
    try {
      const response = await fetch('https://trackingapp-aj8f.onrender.com/tournaments'); // Replace with your back-end endpoint
      const data = await response.json();
      setTournaments(data);
    } catch (error) {
      console.error('Error fetching tournaments:', error);
    }
  };

  // Fetch tournaments when the component loads
  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Poker Tracker Web App</h1>
      <p>List of tournaments:</p>
      <ul>
        {tournaments.length > 0 ? (
          tournaments.map((tournament, index) => (
            <li key={index}>{tournament.name} - {tournament.type}</li>
          ))
        ) : (
          <p>No tournaments found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
