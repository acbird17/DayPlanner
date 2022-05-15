var rowEl = $(".row");
var hourIndex = $(".hour").each(function (index) {});
var inputIndex = $("textarea").each(function (index) {});
var buttonIndex = $(".saveBtn").each(function (index) {});

$("#currentDay").append(
  "Todays Date: " + moment().format("MMMM Do YYYY, h:mm:ss a")
);

currentTime = new Date().getHours();
newTime = currentTime + ":00";
console.log(newTime);

colorChange();
showTasks();

function colorChange() {
  for (var i = 0; i < hourIndex.length; i++)
    if (rowEl.children("div").eq(i).text() < currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("past");
    } else if (rowEl.children("div").eq(i).text() > currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("future");
    } else if (rowEl.children("div").eq(i).text() == currentTime) {
      $(rowEl.children("textarea").eq(i)).addClass("present");
    }
}

function showTasks() {
  //   for (var i = 0; i < hourIndex.length; i++);
  $("#input0").append(localStorage.getItem("row0"));
  $("#input1").append(localStorage.getItem("row1"));
  $("#input2").append(localStorage.getItem("row2"));
  $("#input3").append(localStorage.getItem("row3"));
  $("#input4").append(localStorage.getItem("row4"));
  $("#input5").append(localStorage.getItem("row5"));
  $("#input6").append(localStorage.getItem("row6"));
  $("#input7").append(localStorage.getItem("row7"));
  $("#input8").append(localStorage.getItem("row8"));
}

$("#btn0").click(function (event) {
  event.preventDefault();
  var row0 = $("#input0").val();
  localStorage.setItem("row0", row0);
});

$("#btn1").click(function (event) {
  event.preventDefault();
  var row1 = $("#input1").val();
  localStorage.setItem("row1", row1);
});

$("#btn2").click(function (event) {
  event.preventDefault();
  var row2 = $("#input2").val();
  localStorage.setItem("row2", row2);
});

$("#btn3").click(function (event) {
  event.preventDefault();
  var row3 = $("#input3").val();
  localStorage.setItem("row3", row3);
});

$("#btn4").click(function (event) {
  event.preventDefault();
  var row4 = $("#input4").val();
  localStorage.setItem("row4", row4);
});

$("#btn5").click(function (event) {
  event.preventDefault();
  var row5 = $("#input5").val();
  localStorage.setItem("row5", row5);
});

$("#btn6").click(function (event) {
  event.preventDefault();
  var row6 = $("#input6").val();
  localStorage.setItem("row6", row6);
});

$("#btn7").click(function (event) {
  event.preventDefault();
  var row7 = $("#input7").val();
  localStorage.setItem("row7", row7);
});

$("#btn8").click(function (event) {
  event.preventDefault();
  var row8 = $("#input8").val();
  localStorage.setItem("row8", row8);
});

// $($($(".saveBtn")[0]).parent('.row')).data('row')
