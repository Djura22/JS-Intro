describe("FizzBuzz", function () {
  var fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function () {
    it("fizzes for 3", function () {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });
  });

  describe("multiples of 5", function () {
    it("buzzes for 5", function () {
    	expect(fizzBuzz.play(5)).toEqual("Buzz");
    });
  });

  describe("multiples of both 3 and 5", function () {
    it("FizzBuzz for mults of 3 and 5", function () {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });
  });

  describe("not multiple of both 3 or 5", function () {
    it("returns number for not mults of 3 and 5", function () {
      expect(fizzBuzz.play(17)).toEqual(17);
    });
  });

});
