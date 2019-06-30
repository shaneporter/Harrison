import { ILocationService } from './LocationService';
import { ISunService } from './SunService';

interface SunTimes {
  readonly sunrise: string;
  readonly sunset: string;
}

export interface IHarrisonService {
  getSunTimes():SunTimes; 
}

export class HarrisonService implements IHarrisonService {

  _locationService: ILocationService;
  _sunService: ISunService;

  constructor(locationService: ILocationService, sunService: ISunService) {
    this._locationService = locationService;
    this._sunService = sunService;
  }

  getSunTimes() {
    
    // @TODO: make appropriate calls:
    let times:SunTimes = { 
      sunrise: '4:00:00AM',
      sunset: '9:00:00PM',
    }
  
    return times;
  }
}