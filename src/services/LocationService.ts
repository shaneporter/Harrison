export interface ILocationService {
  getCurrentPosition(): Promise<Position>;
};

export class LocationService implements ILocationService {
  async getCurrentPosition():Promise<Position> {

    const options = {};

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })
  }
}