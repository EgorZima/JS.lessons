var field = document.getElementById('field');
var ball = document.getElementById('ball');
  
ball.style.width = ball.style.height = 40 + 'px';
  
//   ПОМЕСТИТЬ МЯЧ В ЦЕНТР ПОЛЯ
var newWidth = (field.clientWidth / 2) - (ball.offsetWidth / 2);
var newHeight = (field.clientHeight / 2) - (ball.offsetHeight / 2);
  
setTimeout( () => {
  ball.style.top = newHeight + 'px';
  ball.style.left = newWidth + 'px';
}, 700)


  // ПОМЕСТИТЬ МЯЧ В РАНДОМНОЕ МЕСТО НА ПОЛЕ
  var fieldTwo = document.getElementById('field-two');
  var ballTwo = document.getElementById('ball-two');
  
 function getRandom(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;     
  }

setInterval( () => {
  ballTwo.style.top = getRandom(0, fieldTwo.clientHeight - ballTwo.width) + 'px';
  ballTwo.style.left = getRandom(0, fieldTwo.clientWidth - ballTwo.height) + 'px';
}, 300)

  

