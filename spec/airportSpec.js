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
  });

  describe("take-off", function () {
    it("allows plane to takeoff from the airport", function () {
      airport.land("plane");
      airport.land("plane2");
      airport.take_off("plane");
      expect(airport.planes).toEqual(["plane2"]);
    });
  });




});
