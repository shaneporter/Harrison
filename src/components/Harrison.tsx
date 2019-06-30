import React, { useState } from 'react';

import { LocationService } from '../services/LocationService';
import { SunService } from '../services/SunService';
import { HarrisonService } from  '../services/HarrisonService';

type IHarrisonState = {
  sunrise: string,
  sunset: string,
  fetching: boolean,
  fetched: boolean,
  error?: Error,
}

const Harrison: React.FC = () => {

  // initialise the state:
  const [sunTimes, setSunTimes] = useState<IHarrisonState>({
    sunrise: '',
    sunset: '',
    fetching: false,
    fetched: false
  });

  const fetch = async () => {

    try {

      // @TODO: DI here for composition root:
      let harrisonService:HarrisonService = new HarrisonService(
        new LocationService(), new SunService()
      );

      const res = await harrisonService.getSunTimes();

      setSunTimes({
        sunrise: res.sunrise,
        sunset: res.sunset,
        fetching: false,
        fetched: true,
      });

    } catch(e) {

      setSunTimes({
        sunrise: '',
        sunset: '',
        fetched: false,
        fetching: false,
        error: e
      })
    }
  }

  fetch();

  return (
    <div>{JSON.stringify(sunTimes, null, 2)}</div>
  );
}

export default Harrison;
