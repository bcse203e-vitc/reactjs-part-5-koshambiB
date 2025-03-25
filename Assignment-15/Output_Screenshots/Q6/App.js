import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => {
  const buttonStyle = {
    margin: '5px',
    padding: '20px',
    fontSize: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Note: eval() is used here for simplicity; avoid using eval() in production code
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  };

  const displayStyle = {
    marginBottom: '20px',
    padding: '10px',
    width: '210px',
    textAlign: 'right',
    fontSize: '24px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttons = [
    7, 8, 9, '/',
    4, 5, 6, '*',
    1, 2, 3, '-',
    0, '.', '=', '+',
    'C'
  ];

  return (
    <div style={containerStyle}>
      <div style={displayStyle}>
        {input || '0'}
      </div>
      <div style={displayStyle}>
        {result}
      </div>
      <div>
        {buttons.map((button) => (
          <Button key={button} value={button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

export default App;
