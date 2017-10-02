$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york'|| userInput === 'new york city') {
    clearBackground();
    $('body').addClass('nyc');
  } else if (userInput === 'sf' || userInput === 'san fransisco') {
    clearBackground();
    $('body').addClass('sf');
    } else if (userInput === 'la' || userInput === 'los angeles') {
    clearBackground();
    $('body').addClass('la');
  } else if (userInput === 'austin' || userInput === 'atx') {
    clearBackground();
    $('body').addClass('austin');
  } else if (userInput === 'sydney' || userInput === 'syd') {
    clearBackground();
    $('body').addClass('sydney');
  }
}

  function clearBackground() {
  $('body').removeClass('nyc sf la austin sydney')

  }
