
document.getElementById("but1").onclick=function() {
  //alert(document.getElementById("txt").value)

  var table = document.getElementById("tab");
//  console.dir(table);

  var bestS;
  var bestSS = 0;
  for (var i = 0; i < table.rows.length; i++) {
    var stud = table.rows[i].cells[0].innerHTML;
    var mark = +table.rows[i].cells[1].innerHTML;
    if (mark > bestSS) {
      bestSS = mark;
      bestS = stud;
    }
  }
  console.log(bestS, bestSS);
}

//https://coderoad.ru/5524116/%D0%94%D0%BE%D1%81%D1%82%D1%83%D0%BF-%D0%BA-localhost-xampp-%D1%81-%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B0-%D0%BF%D0%BE-%D1%81%D0%B5%D1%82%D0%B8-LAN-%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C


var params = {

body: "Note body",
tag: "qwerty",
icon: "ic_chats.png"

}

Notification.requestPermission().then(function (permission) {
            console.log(permission)
             var notification = new Notification("Hi there!");
             console.log(notification);
});

// window.onload = function () {
//   // Проверка поддержки браузером уведомлений
//   if (!("Notification" in window)) {
//     alert("This browser does not support desktop notification");
//   }
//
//   // Проверка разрешения на отправку уведомлений
//   else if (Notification.permission === "granted") {
//     // Если разрешено, то создаем уведомление
//     var notification = new Notification("Hi there!");
//   }
//
//   // В противном случае, запрашиваем разрешение
//   else if (Notification.permission !== 'denied') {
//     Notification.requestPermission(function (permission) {
//       // Если пользователь разрешил, то создаем уведомление
//       if (permission === "granted") {
//         var notification = new Notification("Hi there!");
//       }
//     });
//   }
//
//   // В конечном счете, если пользователь отказался от получения
//   // уведомлений, то стоит уважать его выбор и не беспокоить его
//   // по этому поводу.
// }

console.groupCollapsed("Group1");
console.log("Hello");
console.info("bob");
console.warn("warn");
console.error("error");
console.groupEnd()

console.log('5'+3);

console.log(console);
console.dir(console);

console.log(window);
console.dir(window);

// if (confirm("BOI?")) {
//   console.log("boi");
// } else {
//   console.log("Gril");
// }

var x = 10;
//
// javascript:(()=>{
//   document.getElementsByClassName('layout__row layout__row_services')[0].hidden="true";
//   document.getElementsByClassName('layout__row layout__row_navbar')[0].hidden="true";
//   document.getElementsByClassName('column-wrapper column-wrapper_post js-sticky-wrapper')[0].hidden="true";
//
// })();
//
// (()=>{console.log(document.getElementsByClassName('logo')[0].hidden="true");})()
//
//  console.log(document.getElementsByClassName('logo')[0].hidden="true");
