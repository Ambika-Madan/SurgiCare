var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function createCalendar() {
  var calendar = document.getElementById("calendar");
  var monthYear = document.createElement("div");
  monthYear.innerHTML = monthNames[currentMonth] + " " + currentYear;
  calendar.appendChild(monthYear);

  var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  var firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var table = document.createElement("table");
  calendar.appendChild(table);

  var headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  for (var i = 0; i < daysOfWeek.length; i++) {
    var headerCell = document.createElement("th");
    headerCell.innerHTML = daysOfWeek[i];
    headerRow.appendChild(headerCell);
  }

  var date = 1;
  for (var week = 0; week < 6; week++) {
    var row = document.createElement("tr");
    table.appendChild(row);

    for (var day = 0; day < 7; day++) {
      var cell = document.createElement("td");
      if (date <= daysInMonth && (week > 0 || day >= firstDayIndex)) {
        cell.innerHTML = date;
        date++;
      }
      row.appendChild(cell);
    }
  }
}

createCalendar();

    