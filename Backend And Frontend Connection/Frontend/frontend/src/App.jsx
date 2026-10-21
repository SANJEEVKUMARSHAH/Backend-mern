
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/jokes')
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to fetch jokes from backend.');
      });
  }, []);

  return (
    <div>
      <h1 style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        Frontend and Backend Connection
      </h1>

      <p style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        Hi, welcome to the full-stack connection!
      </p>

      <p style={{
        backgroundColor: 'pink',
        color: 'black',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        Jokes: {jokes.length}
      </p>

      <h2>Jokes from Backend</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {jokes.map((joke) => (
        <p
          key={joke.id}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '15px',
            borderRadius: '10px'
          }}
        >
          {joke.joke}
        </p>
      ))}
    </div>
  );
};

export default App;
