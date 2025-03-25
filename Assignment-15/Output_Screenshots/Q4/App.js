import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  const profile = {
    name: "John Doe",
    age: 30,
    location: "New York, USA"
  };

  const inlineStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={inlineStyle}>
      <h2 className="name">{profile.name}</h2>
      <p className="age">Age: {profile.age}</p>
      <p className="location">Location: {profile.location}</p>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default App;
