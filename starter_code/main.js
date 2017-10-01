$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  if (userInput === 'nyc' || userInput === 'new york') {
    $('body').addClass('nyc');
  }  else if (userInput === 'sf' || userInput === 'san fransisco') {
    $('body').addClass('sf');
  } else if (userInput === 'la' || userInput === 'Los Angeles') {
    $('body').addClass('la');
  } else if (userInput === 'Austin' || userInput === 'ATX') {
    $('body').addClass('austin');
  } else {
    (userInput === 'Sydney' || userInput === 'SYD')
    $('body').addClass('sydney');
  }
}
