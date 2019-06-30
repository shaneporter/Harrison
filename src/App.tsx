import React, { useState } from 'react';
import './App.css';

import { LocationService } from './services/LocationService';
import { SunService } from './services/SunService';
import { HarrisonService } from  './services/HarrisonService';

const App: React.FC = () => {

  const [sunTimes, setSunTimes] = useState({});

  const fetch = async () => {

    try {

      // @TODO: DI here for composition root:
      let harrisonService:HarrisonService = new HarrisonService(
        new LocationService(), new SunService()
      );

      const res = await harrisonService.getSunTimes();

      setSunTimes(res);

    } catch(e) {
      console.error('TODO: handle error');
    }
  }

  fetch();

  return (
    <div>{JSON.stringify(sunTimes, null, 2)}</div>
  );
}

export default App;
