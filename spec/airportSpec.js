describe("Airport", function () {
  var airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("land", function () {
    it("Lands airplane at the airport", function () {
      airport.land("plane");
      expect(airport.planes).toEqual(["plane"]);
    });

    it("prevent plane to land if airport is full", function () {
      for (i = 1; i <= airport.CAPACITY; i++) {
        airport.land(`planes${i}`);
      }
      expect(function () {
        airport.land("plane21");
      }).toThrow(new Error("Airport is full"));
    });
  });
});
