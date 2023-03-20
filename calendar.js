function showCalendar(doctorName) {
    // Hide all calendars first
    var calendars = document.querySelectorAll('[id$="-calendar"]');
    for (var i = 0; i < calendars.length; i++) {
      calendars[i].style.display = "none";
    }

    // Show the selected calendar
    var calendar = document.querySelector('#' + doctorName + '-calendar');
    if (calendar) {
      calendar.style.display = "";
    }
  }