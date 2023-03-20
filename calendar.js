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
  
  var min = '2023-03-20T00:00';
  var max = '2023-09-20T00:00';
  
  mobiscroll.datepicker('#demo-booking-single', {
      controls: ['calendar'],
      min: min,
      max: max,
      onPageLoading: function (event, inst) {
          getPrices(event.firstDay, function callback(bookings) {
              inst.setOptions({
                  labels: bookings.labels,
                  invalid: bookings.invalid
              });
          });
      }
  });
  function getPrices(d, callback) {
    var invalid = [],
        labels = [];

    mobiscroll.util.http.getJson('//trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), function (bookings) {
        for (var i = 0; i < bookings.length; ++i) {
            var booking = bookings[i],
                d = new Date(booking.d);

            if (booking.price > 0) {
                labels.push({
                    start: d,
                    title: '$' + booking.price,
                    textColor: '#e1528f'
                });
            } else {
                invalid.push(d);
            }
        }
        callback({ labels: labels, invalid: invalid });
    }, 'jsonp');
}