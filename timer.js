// Function to start a countdown timer
function startCountdown(duration) {
    // Convert duration to seconds (if it's in minutes or hours)
    if (typeof duration === 'string' && duration.includes('m')) {
      duration = parseInt(duration) * 60;
    } else if (typeof duration === 'string' && duration.includes('h')) {
      duration = parseInt(duration) * 60 * 60;
    }
  
    // Convert duration to seconds (if it's in minutes or hours)
    if (typeof duration !== 'number' || isNaN(duration)) {
      throw new Error('Invalid duration. Please provide a number or a string with "m" for minutes or "h" for hours.');
    }
  
    let timer = duration, minutes, seconds;
  
    // Set up interval to update the timer every second
    const interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      // Display the timer in an element with id 'countdown'
      document.getElementById('countdown').innerHTML = minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
        // Stop the timer when it reaches 0
        clearInterval(interval);
      }
    }, 1000);
  }
  
  // Start the countdown with a duration of 10 minutes (600 seconds)
  startCountdown(600);