import React, { useState, ReactElement } from 'react';

import { LocationService } from '../services/LocationService';
import { SunService } from '../services/SunService';
import { HarrisonService } from  '../services/HarrisonService';
import Intro from './Intro';
import Progress from './Progress';

type IHarrisonState = {
  sunrise: string,
  sunset: string,
  fetching: boolean,
  fetched: boolean,
  error?: Error,
}

interface HarrisonProps {
}

const Harrison: React.FC<HarrisonProps> = ({}) => {

  // initialise the state:
  const [sunTimes, setSunTimes] = useState<IHarrisonState>({
    sunrise: '',
    sunset: '',
    fetching: false,
    fetched: false
  });

  const onStart = () => {
    setSunTimes({...sunTimes, fetching: true});
    fetch();
  }

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

  if(sunTimes.fetched) {
    // @TODO: return sun
  } else if(sunTimes.error) {
    // @TODO: return error
  } else {
    // @TODO: return progress/intro
    return sunTimes.fetching ? <Progress /> : <Intro {...{onStart}} /> 
  }

  return (
    <div>{JSON.stringify(sunTimes, null, 2)}</div>
  );
}

export default Harrison;
