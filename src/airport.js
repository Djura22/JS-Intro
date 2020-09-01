class Airport {
  constructor() {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
  }

  take_off(p) {
    this.planes = this.planes.filter(item => item !== p);
  }

}

var ap = new Airport();
ap.land("Big plane");
console.log(ap.planes[1]);
