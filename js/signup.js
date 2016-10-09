$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#msg').prepend("Thank you, in the event I actually had a list, your email: " + email + " would have been added to the list. However, this is just a programming exercise and there is no list.");
  });
});
