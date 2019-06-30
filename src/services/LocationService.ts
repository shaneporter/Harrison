export interface ILocationService {
  getCurrentPosition(): Promise<Position>;
};

export class LocationService implements ILocationService {
  async getCurrentPosition():Promise<Position> {

    // @TODO: pass in these options?
    const options:PositionOptions = {
      maximumAge: 60000, 
      timeout: 10000,
      // enableHighAccuracy: true
    };

    return new Promise((resolve, reject) => {

      if(!navigator.geolocation) {
        // @TODO: custom exception type here for better handling:
        reject('Sorry, your browser does not support geolocation.');
      }

      return navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })
  }
}