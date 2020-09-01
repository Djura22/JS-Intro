class Airport {
  constructor() {
    this.planes = [];
  }

  land(plane) {
    this.planes.push(plane);
  }
}

var ap = new Airport();
ap.land("BIg plane");
console.log(ap.planes[1]);
