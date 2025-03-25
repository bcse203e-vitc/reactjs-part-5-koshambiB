import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

function Header() {
  return <h2>This is the header</h2>;
}

function Footer() {
  return <h2>@ Welcome to my website 2025. This is the footer.</h2>;
}

function CurrentTime() {
  return <h2>Current time: {new Date().toLocaleTimeString()}</h2>;
}

function Theme({ toggleTheme, darkMode }) {
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1>Theme Switcher</h1>
      <p>This is an example of a Theme Switcher using CSS Modules.</p>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fruits = ["apple", "banana", "cherry"];
  const name = "Koshambi";

  const mystyle = { color: "blue", fontSize: "28px" };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? styles.dark : styles.light;
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true);
    }, 5000);
    return () => clearTimeout(timer); // Unmount on refresh
  }, []);

  function handleClick() {
    alert("You clicked the button");
  }

  return (
    <>
      <Header />
      <h1>{isLoggedIn ? `This is my first react app. Hi ${name}!` : "Please log in"}</h1>
      <ul style={mystyle}>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
      <CurrentTime />
      <Theme toggleTheme={toggleTheme} darkMode={darkMode} />
      <Footer />
    </>
  );
}

export default App;
