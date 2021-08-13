function convertTimeToWords(hours, minutes) {

  //arrays holding text for the minutes and hours
  const minText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];
  const hoursText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one'];

  //if minutes is equal to 30 or 15, it prints quarter or half past *hour*
  if (minutes === 30 || minutes === 15) {
    document.getElementById("time").innerHTML = `${minText[minutes-1]} past ${hoursText[hours - 1]}`; //if it falls into this condition, the text populates the h1 with the id of time in index.html
  } else if (minutes === 0) {
    document.getElementById("time").innerHTML = `${hoursText[hours - 1]} o' clock`;  //prints *hour* o' clock if minutes equal 0
  } else if (minutes > 30) {
    minutes = 60 - minutes;   //The minText array only lists numbers up to thirty, so this inverses the count so it won't go out of range
    if (minutes === 15) {
      document.getElementById("time").innerHTML = `${minText[minutes-1]} to ${hoursText[hours]}`;  //prints quarter to *next hour* if minutes is 15 after inversing
    } else {
      if (minutes === 1) {
        document.getElementById("time").innerHTML = `${minText[minutes-1]} minute to ${hoursText[hours]}`; //prints 1 minute to *next hour* if minutes is greater than 30 (closer to the next hour)
      } else {
        document.getElementById("time").innerHTML = `${minText[minutes-1]} minutes to ${hoursText[hours]}`; //prints >1 minutes to *next hour* if minutes is more than 1
      }
    }
  } else {
    if (minutes === 1) {
      document.getElementById("time").innerHTML = `${minText[minutes-1]} minute past ${hoursText[hours - 1]}`; //prints 1 minute past *current hour* if minutes is less than 30
    } else {
      document.getElementById("time").innerHTML = `${minText[minutes-1]} minutes past ${hoursText[hours - 1]}`; //prints >1 minutes past *current hour* if minutes is less than 30
    }
  }
}

//When the form in index.html is submitted, it calls the convertTimeToWords function and passes in the users parameters
const timeForm = document.getElementById("timeForm");

timeForm.addEventListener("submit", (e) => {
  var hours = Number(document.getElementById("hours").value);
  var minutes = Number(document.getElementById("minutes").value);
  e.preventDefault();
  convertTimeToWords(hours, minutes)
});
