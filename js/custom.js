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

$("#dead").click(function (event) {
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


// конечная дата
const deadline = new Date(Date.now() + 6000999);
// id таймера
let timerId = null;
// склонение числительных
function declensionNum(num, words) {
  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}
// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
function countdownTimer() {
  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
    // alert('Время вышло')
    popupBg.classList.add('open');
    // window.location.reload();
    // location.reload();
  }
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
}
// получаем элементы, содержащие компоненты даты
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');
// вызываем функцию countdownTimer
countdownTimer();
// вызываем функцию countdownTimer каждую секунду
timerId = setInterval(countdownTimer, 1000);