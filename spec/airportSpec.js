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
});
