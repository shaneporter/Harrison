import React from 'react';
import './App.css';

import { LocationService } from './services/LocationService';
import { SunService } from './services/SunService';
import { HarrisonService } from  './services/HarrisonService';

const App: React.FC = () => {

  // @TODO: DI here for composition root:
  let harrisonService:HarrisonService = new HarrisonService(
    new LocationService(), new SunService()
  );

  const sunTimes = harrisonService.getSunTimes();

  return (
    <div>{JSON.stringify(sunTimes, null, 2)}</div>
  );
}

export default App;
