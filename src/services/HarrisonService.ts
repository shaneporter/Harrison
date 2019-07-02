import { ILocationService } from './LocationService';
import { ISunService } from './SunService';

interface SunTimes {
  readonly sunrise: string;
  readonly sunset: string;
}

export interface IHarrisonService {
  getSunTimes():Promise<SunTimes>; 
}

export class HarrisonService implements IHarrisonService {

  _locationService: ILocationService;
  _sunService: ISunService;
  toLocal = (utcTime:string) => new Date(utcTime).toLocaleTimeString();

  constructor(locationService: ILocationService, sunService: ISunService) {
    this._locationService = locationService;
    this._sunService = sunService;
  }

  async getSunTimes() {

    let { coords } = await this._locationService.getCurrentPosition();

    let { data } = await this._sunService.getSunTimes(coords.latitude, coords.longitude);
  
    const { sunrise, sunset } = data.results;

    return {
      sunrise: this.toLocal(sunrise),
      sunset: this.toLocal(sunset)
    };
  }
}