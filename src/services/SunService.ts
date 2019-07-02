export interface ISunService {
  // @TODO: replace 'any' type:
  getSunTimes(lat: number, lng: number): Promise<any>;
}

export class SunService implements ISunService {
  async getSunTimes(lat: number, lng: number) {

    const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);

    const json = await res.json();

    return {
      sunrise: json.results.sunrise,
      sunset: json.results.sunset
    }
  }
}
