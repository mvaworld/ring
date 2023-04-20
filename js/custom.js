let first = true,
  second = true;

$("#update").click(function (event) {
  $(".big__fortune").toggleClass("winPosition");
});

var clickCount = 0;

$("#update").click(function (event) {
  if (clickCount % 2 == 0) {
    setTimeout(() => {
      $("#popup1").toggleClass("open");
    }, 4500);

    clickCount++;
  }
});

$("#remove-pop").click(function (event) {
  $("#popup2").toggleClass("open");
});

//----------------------------
$("#counter").data("count", 2);
$("#update").click(function () {
  $("#counter").html(function () {
    var $this = $(this),
      count = $this.data("count") - 1;

    $this.data("count", count);
    if (count == undefined || count == "" || count <= 0) {
      var count = 0;
    }
    return count;
  });
});