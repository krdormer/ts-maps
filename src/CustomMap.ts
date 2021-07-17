// Instructions to classes on how to use addMarker method
interface MapEntity {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(mapEntity: MapEntity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapEntity.location.lat,
        lng: mapEntity.location.lng,
      },
    });

    marker.addListener('click', () => {
      const window = new google.maps.InfoWindow({
        content: 'Hi',
      });
      window.open(this.googleMap, marker);
    });
  }
}
