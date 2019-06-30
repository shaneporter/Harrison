import axios, { AxiosResponse } from 'axios';

export interface ISunService {
  // @TODO: replace 'any' type:
  getSunTimes(lat: number, lng: number): Promise<AxiosResponse<any>>;
}

export class SunService implements ISunService {
  async getSunTimes(lat: number, lng: number) {
    return axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);
  }
}
