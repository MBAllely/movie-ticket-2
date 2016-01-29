describe("Ticket", function() {
  it("creates a new movie ticket with the given properties", function(){
    var testTicket = new Ticket("Birdman", "matinee", "age")
    expect(testTicket.movieName).to.equal("Birdman");
    expect(testTicket.time).to.equal("matinee");
    expect(testTicket.age).to.equal("age");
  });
  it("adds the fullDetails method to the ticket", function() {
    var testTicket = new Ticket("Birdman", "matinee");
    expect(testTicket.fullDetails()).to.equal("Birdman matinee");
  });
  it("determines if the inputted price is eligible for a discount", function() {
    var testTicket = new Ticket("Birdman", "regular", "child");
    expect(testTicket.pricer()).to.equal(8);
  });
  it("determines if the inputted time is eligible for a discount", function() {
    var testTicket = new Ticket("Birdman", "matinee", "adult");
    expect(testTicket.pricer()).to.equal(8);
  });
});

// describe("ager", function() {
//   it("determines if age input is discount rate", function() {
//     expect(ager(inputtedAge)).to.equal("discounted-age");
//   });
// });
