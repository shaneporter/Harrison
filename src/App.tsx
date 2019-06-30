import React from 'react';
import './App.css';
import Harrison from './components/Harrison';
import Sun from './components/Sun';

const App: React.FC = () => {
  return (
    <div>
      <Harrison sun={(sunrise, sunset) => (<div>** {sunrise} ** {sunset}></div>)} />
    </div>
  );
}

export default App;
