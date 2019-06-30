import React from 'react';
import './App.css';
import Harrison from './components/Harrison';
import Sun from './components/Sun';

const App: React.FC = () => {
  return (
    <Harrison sun={(sunrise, sunset) => (<Sun sunrise={sunrise} sunset={sunset} />)} />
  );
}

export default App;
