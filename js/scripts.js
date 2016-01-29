function Ticket (movieName, time, age) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
}

Ticket.prototype.fullDetails = function () {
  return this.movieName + ", " + this.time + " showing,";
};


Ticket.prototype.pricer = function() {
  var price = 10;
  if (this.age != "adult") {
    price -=2;
  }

  if (this.time != "regular") {
    price -=2;
  }

  return price;
};


$(document).ready(function() {
  $("form#ticket-order").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("select#movie-name").val();
    var inputtedTime = $("select#time-of-day").val();
    var inputtedAge = $("select#age").val();
    var userMovie = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    $(".result").show();
    $("#result").text(userMovie.fullDetails() + " $" + userMovie.pricer() + ".00");
  });

});
