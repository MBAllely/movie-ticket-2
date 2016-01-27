describe("Ticket", function() {
  it("creates a new movie ticket with the given properties", function(){
    var testTicket = new Ticket("Birdman", "4pm", "adult")
    expect(testTicket.movieName).to.equal("Birdman");
    expect(testTicket.time).to.equal("4pm");
    expect(testTicket.discountedAge).to.equal("adult");
  });
  it("adds the fullDetails method to the ticket", function() {
    var testTicket = new Ticket("Birdman", "4pm");
    expect(testTicket.fullDetails()).to.equal("Birdman 4pm");
  });
});

// describe("ager", function() {
//   it("determines if age input is discount rate", function() {
//     expect(ager(inputtedAge)).to.equal("discounted-age");
//   });
// });
