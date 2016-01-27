function Ticket (movieName, time, discountedAge) {
  this.movieName = movieName;
  this.time = time;
  this.discountedAge = discountedAge;
}

Ticket.prototype.fullDetails = function () {
  return this.movieName + " " + this.time;
};


Ticket.prototype.price = function() {
  var price = 10

  if (this.time === "matinee") { //determines if showtime discount applies
    price -= 2;
  }

  if (this.discountedAge = true) { //determines if age discount applies
    price -= 2;
  }

  return price;
};


$(document).ready(function() {
  ("form#ticket-order").submit(function(event) {
    event.preventDefault();

    var inputtedAge = $("input#age").val();
    var inputtedMovie = $("input#movie-name").val();
    var inputtedTime = $("input#time-of-day").val();

    var discountedAge;

    if (inputtedAge === "discounted-age") {
      discountedAge = true;
    }

    newTicket = new Ticket()
  })

})
