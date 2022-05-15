var rowEl = $(".row");
var hourIndex = $(".hour");

$("#currentDay").append(
  "Todays Date: " + moment().format("MMMM Do YYYY, h:mm:ss a")
);

currentTime = new Date().getHours();

colorChange();
showTasks();

function colorChange() {
  for (var i = 0; i < hourIndex.length; i++)
    if (rowEl.children("div").eq(i).data("time") < currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("past");
    } else if (rowEl.children("div").eq(i).data("time") > currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("future");
    } else if (rowEl.children("div").eq(i).data("time") == currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("present");
    }
}

function showTasks() {
  for (var i = 0; i < hourIndex.length; i++) {
    $("#input" + i).append(localStorage.getItem("row" + i));
  }
}

$(".saveBtn").click(function () {
  var id = $(this).attr("id");
  id = id.replace("btn", "");
  var row = $("#input" + id).val();
  localStorage.setItem("row" + id, row);
});
