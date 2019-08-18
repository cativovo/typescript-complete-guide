/* eslint-disable no-new */
/* eslint-disable no-undef */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker(mappable: Mappable): void {
    const {
      location: { lat, lng },
    } = mappable;

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
