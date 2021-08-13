function convertTimeToWords(hours, minutes) {


  const minText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];

  const hoursText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one'];

  if (minutes === 30 || minutes === 15) {

    document.getElementById("time").innerHTML = `${minText[minutes-1]} past ${hoursText[hours - 1]}`;

  } else if (minutes === 0) {

  document.getElementById("time").innerHTML = `${hoursText[hours - 1]} o' clock`;

  } else if (minutes > 30) {

    minutes = 60 - minutes;

    if (minutes === 15) {

      document.getElementById("time").innerHTML = `${minText[minutes-1]} to ${hoursText[hours]}`;

    } else {

      if (minutes === 1) {

        document.getElementById("time").innerHTML = `${minText[minutes-1]} minute to ${hoursText[hours]}`;

      } else {

        document.getElementById("time").innerHTML = `${minText[minutes-1]} minutes to ${hoursText[hours]}`;

      }
    }
  } else {

    if (minutes === 1) {

    document.getElementById("time").innerHTML = `${minText[minutes-1]} minute past ${hoursText[hours - 1]}`;

    } else {

      document.getElementById("time").innerHTML = `${minText[minutes-1]} minutes past ${hoursText[hours - 1]}`;
    }
  }
}

const timeForm = document.getElementById("timeForm");

timeForm.addEventListener("submit", (e) => {
  var hours = Number(document.getElementById("hours").value);
  var minutes = Number(document.getElementById("minutes").value);
  e.preventDefault();
  convertTimeToWords(hours, minutes)

});
