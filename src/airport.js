class Airport {
  constructor() {
    this.planes = [];
    this.CAPACITY = 20;
  }

  land(plane) {
    if (this.CAPACITY === this.planes.length) {
      throw new Error("Airport is full");
    }

    this.planes.push(plane);
  }

  take_off(p) {
    this.planes = this.planes.filter((item) => item !== p);
  }
}

var ap = new Airport();
ap.land("Big plane");
console.log(ap.planes[1]);
