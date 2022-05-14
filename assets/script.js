var rowEl = $(".row");

var hourIndex = $(".hour").each(function (index) {});
console.log(hourIndex);

var inputIndex = $("textarea").each(function (index) {});
console.log(inputIndex);
var buttonIndex = $(".saveBtn").each(function (index) {});
console.log(buttonIndex);

$("#currentDay").append(
  "Todays Date: " + moment().format("MMMM Do YYYY, h:mm:ss a")
);

currentTime = new Date().getHours();
console.log(currentTime);

ColorChange();

function ColorChange() {
  for (var i = 0; i < hourIndex.length; i++)
    if (rowEl.children("div").eq(i).text() < currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("past");
    } else if (rowEl.children("div").eq(i).text() > currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("future");
    } else if (rowEl.children("div").eq(i).text() == currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("present");
    }
}
